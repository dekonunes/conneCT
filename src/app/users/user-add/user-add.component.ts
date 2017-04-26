import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../../shared/auth.service";
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
      private authService: AuthService,
      private iconRegistry: MdIconRegistry,
      private sanitizer: DomSanitizer,
      private dialog: MdDialog,
      public dialogRef: MdDialogRef<UserAddComponent>,
      public formBuilder: FormBuilder,
      private userService: UserService,
      private questionService: QuestionService) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      this.newUserForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        telephone: ['', [Validators.required, Validators.minLength(6)]],
        telephoneOther: ['', [Validators.required, Validators.minLength(6)]],
        gender: ['', Validators.required],
        birthday: ['', Validators.required]
      });
      iconRegistry.addSvgIcon(
        'gender',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/gender.svg'));
      iconRegistry.addSvgIcon(
        'cake',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/cake.svg'));
    }

    onSubmit(formData: any) {
      this.authService.createAuthUser(this.newUserForm.value)
        .then(
          (success) => {
          this.userService.addUserDQ(new User(
            success.uid,
            formData.value.name,
            formData.value.email,
            formData.value.password,
            formData.value.telephone,
            formData.value.telephoneOther,
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
