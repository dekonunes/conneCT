import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { User } from "../shared/user.model"
import { UserService } from "../shared/user.service";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uidCT: string;
  uidDQ: string = null;
  users$: Observable<User[]>;
  users: User[] = [];
  filteredUsers: User[] = [];
  @Input() backButton: boolean;
  private termOfSearch: Subject<string> = new Subject<string>();

  constructor(
      private authService: AuthService,
      private router: Router,
      private activatedRouter: ActivatedRoute,
      private userService: UserService) {}

  ngOnInit() {
    this.inicializeUids();
    // this.users$ = this.termOfSearch
    //   .debounceTime(500)
    //   .distinctUntilChanged()
    //   .switchMap(term => term ? this.userService
    //     .getUsers(this.uidCT) : Observable.of<User[]>())
    //   .catch(err => {
    //   console.log(err);
    //   return Observable.of<User[]>();
    // });
    // this.users$.subscribe((_user) => this.users = _user);
  }

  inicializeUids() {
    this.uidDQ = null;
    this.activatedRouter.params.subscribe((_params) => this.uidCT = _params['idCT']);
    this.activatedRouter.params.subscribe((_params) => this.uidDQ = _params['idDQ']);
  }

  // filterStates(input: string) {
  //   this.filteredUsers = this.users.filter(
  //     _user => _user.name.toUpperCase().includes(input.toUpperCase()));
  // }

  // search(term: string) {
  //   this.termOfSearch.next(term);
  //   this.filterStates(term);
  // }

  routerComponent(userUID: string) {
    this.router.navigateByUrl(`/users/${this.uidCT}/user/${userUID}`);
  }

  navigate() {
    this.router.navigate(['/users',this.uidCT]);
  }

  settings() {
    this.router.navigateByUrl(`/users/${this.uidCT}/settings`);

  }

  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('/home');
  }

}
