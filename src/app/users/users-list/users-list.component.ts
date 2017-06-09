import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { MdDialog } from '@angular/material';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { User } from "../../shared/user.model";
import { Answer } from "../../shared/answer.model"
import { UserService } from "../../shared/user.service";
import { UserAddComponent } from "../user-add/user-add.component";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  uidDQ: string;
  uidCT: string;
  users$: Observable<User[]>;
  users: User[] = [];
  filteredUsers: User[] = [];
  nameCT: string;
  isSpinner: boolean = true;
  private termOfSearch: Subject<string> = new Subject<string>();

  constructor(
    private dialog: MdDialog,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.activatedRouter.params
      .forEach((_params: Params) => this.uidCT = _params['idCT']);
    this.userService.getUserCT(this.uidCT)
      .subscribe(_CT => {
        ga('set', 'userId', `${_CT["username"]}_${this.uidCT}`)
        this.nameCT = _CT["username"];
      });
    this.updatePageOfUsers();
  }

  search(input:string) {
    this.filteredUsers = this.users.filter(
      _user => _user.name.toUpperCase().includes(input.toUpperCase()));
  }

  openDialog() {
    this.dialog.open(UserAddComponent,this.uidCT)
      .componentInstance.uidCT = this.uidCT;
  }

  updatePageOfUsers() {
    this.users$ = this.termOfSearch
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(term => term ? this.userService
        .getUsers(this.uidCT) : Observable.of<User[]>())
      .catch(error => {
      console.log(error);
      return Observable.of<User[]>();
    });
    this.userService.getUsers(this.uidCT).subscribe(_users => {
      if(_users.length != this.users.length)
        this.users = this.filteredUsers = _users;
      this.sortArray();
      this.isSpinner = false;
    })
  }

  calculeMedianAnwers(_user: User) {
    let median: number = 0;
    _user.answers.forEach((answer: Answer) => {
      median += answer.answersNumber
    });
    console.log(median/_user.answers.length);
  }

  sortArray() {
    this.filteredUsers.sort((_user1:User, _user2:User) => _user1.averageAnswers - _user2.averageAnswers)
  }

  routerComponent (userUID: string) {
    this.router.navigate([`/users/${this.uidCT}/user/${userUID}`]);
  }

}
