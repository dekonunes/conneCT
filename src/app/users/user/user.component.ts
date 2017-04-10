import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Observable } from "rxjs/Observable";

import { Question } from '../../shared/question.model';
import { User } from "../../shared/user.model"
import { UserService } from "../../shared/user.service";

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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activatedRouter.params.forEach((_params: Params) => {
      this.uidDQ = _params['idDQ'];
      this.uidCT = _params['idCT'];
    });

    this.userService.getUser(this.uidCT,this.uidDQ).first()
    .subscribe(_user =>  this.user = _user);
  }
}
