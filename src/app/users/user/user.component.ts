import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Observable } from "rxjs/Observable";
import { MdDialog, MdDialogRef } from '@angular/material';


import { Question } from '../../shared/question.model';
import { User } from "../../shared/user.model"
import { UserService } from "../../shared/user.service";
import { EditUserComponent } from "./edit-user/edit-user.component";

@Component({
  selector: 'rb-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  uidDQ: string;
  uidCT: string;
  user: User;

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService,
    private dialog: MdDialog
  ) {}

  ngOnInit() {
    this.activatedRouter.params
      .forEach((_params: Params) => {
      this.uidDQ = _params['idDQ'];
      this.uidCT = _params['idCT'];
    });

    this.userService.getUser(this.uidCT,this.uidDQ)
      .first()
      .subscribe(_user => this.user = _user);
  }

  editUserDialog() {
    let dialogRef = this.dialog.open(EditUserComponent, [this.user,this.uidCT,this.uidDQ]);
    dialogRef.componentInstance._user = this.user;
    dialogRef.componentInstance._uidCT = this.uidCT;
    dialogRef.componentInstance._uidDQ = this.uidDQ;
  }
}
