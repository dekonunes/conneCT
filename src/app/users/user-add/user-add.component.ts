import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

import { User } from "../../shared/user.model"
import { MdDialogRef } from "@angular/material";
import { UserService } from "../../shared/user.service";
import { QuestionService } from "../../shared/question.service";

@Component({
    selector: 'rb-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
    @Input() user: User;

    uidCT:string;

    genders = [
        'Mulher',
        'Homem'
    ];

    constructor(
      private af: AngularFire,
      public dialogRef: MdDialogRef<UserAddComponent>,
      private activatedRouter: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private questionService: QuestionService) {
    }

    onSubmit(formData: any) {
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(this.questionService.getQuestion());
        this.userService.addUser(new User(
          success.uid,
          formData.value.name,
          formData.value.email,
          formData.value.password,
          formData.value.phone,
          formData.value.phoneContact,
          formData.value.gender,
          formData.value.birthday,
          (this.questionService.getQuestion()))
            ,this.uidCT);
          this.dialogRef.close();
      })
    }
}
