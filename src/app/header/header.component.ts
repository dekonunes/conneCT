import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2';
import { MdDialog } from '@angular/material';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserAddComponent } from "../users/user-add/user-add.component";
import { User } from "../shared/user.model"
import { UserService } from "../shared/user.service";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  uidCT: string;
  users: Observable<User>;
  user: User;
  private termOfSearch: Subject<string> = new Subject<string>();

  constructor(public dialog: MdDialog,
              private af: AngularFire,
              private router: Router,
              private activatedRouter: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe((_params) => this.uidCT = _params['idCT']);

    this.users = this.termOfSearch
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(term => term ? this.userService
        .getSpecificUser(this.uidCT,term) : Observable.of<User>())
      .catch(err => {
      console.log(err);
      return Observable.of<User>();
    });

    this.users.subscribe((_user) => this.user = _user);
  }

  search(term: string) {
    this.termOfSearch.next(term);
  }

  openDialog() {
    this.dialog.open(UserAddComponent,this.uidCT)
      .componentInstance.uidCT = this.uidCT;
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/home');
  }

}
