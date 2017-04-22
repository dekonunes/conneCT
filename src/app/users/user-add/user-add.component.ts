import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { AngularFire } from 'angularfire2';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Answer } from "../../shared/answer.model"
import { MdDialogRef, MdIconRegistry, MdDialog } from "@angular/material";
import { User } from "../../shared/user.model"
import { UserService } from "../../shared/user.service";
import { QuestionService } from "../../shared/question.service";
import { DialogErrorComponent } from "../../shared/dialog-error.component";


@Component({
    selector: 'rb-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
    uidCT:string;
    newUserForm: FormGroup;

    genders = [
        'Feminino',
        'Masculino'
    ];

    constructor(
      private activatedRouter: ActivatedRoute,
      private iconRegistry: MdIconRegistry,
      private sanitizer: DomSanitizer,
      private af: AngularFire,
      private dialog: MdDialog,
      public dialogRef: MdDialogRef<UserAddComponent>,
      public formBuilder: FormBuilder,
      private userService: UserService,
      private questionService: QuestionService) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      this.newUserForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        phone: ['', [Validators.required, Validators.minLength(6)]],
        otherPhone: ['', [Validators.required, Validators.minLength(6)]],
        gender: [''],
        birthday: ['']
      });
      iconRegistry.addSvgIcon(
        'gender',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/gender.svg'));
      iconRegistry.addSvgIcon(
        'cake',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/cake.svg'));
    }

    onSubmit(formData: any) {
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.userService.addUser(new User(
          success.uid,
          formData.value.username,
          formData.value.email,
          formData.value.password,
          formData.value.phone,
          formData.value.otherPhone,
          formData.value.gender,
          formData.value.birthday,
          this.uidCT,
          this.questionService.getQuestion(),
          null)
            ,this.uidCT);
          this.dialogRef.close();
      }).catch((error: Error) => {
        this.dialog.open(DialogErrorComponent)
          .componentInstance.error = error;
      })
    }
}
