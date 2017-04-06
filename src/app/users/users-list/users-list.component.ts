import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FirebaseListObservable} from 'angularfire2';

import { User } from "../../shared/user.model"
import { UserService } from "../../shared/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnChanges{

  uidDQ: string;
  uidCT: string;
  users: FirebaseListObservable<User[]>;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.activatedRouter.params
      .forEach((_params: Params) => this.uidCT = _params['idCT']);

    if(this.userService.getUsers(this.uidCT) != this.users)
      this.ngOnChanges();
  }

  ngOnChanges() {
    this.users = this.userService.getUsers(this.uidCT);
  }

  routerComponent (userUID: string) {
    this.router.navigate(['/users/user',this.uidCT,userUID]);
  }

}
