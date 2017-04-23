import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdSnackBar, MdDialog } from '@angular/material';

import { FirebaseAuthState } from 'angularfire2';
import { AuthService } from "../shared/auth.service";
import { SnackBarComponent } from './snack-bar.component';
import { DialogErrorComponent } from '../shared/dialog-error.component';
import { UserCT } from '../shared/userCT.model';
import { UserService } from "../shared/user.service";

@Component({
    selector: 'rb-signup',
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    checkedCheckBox = false;

    constructor(
      private authService: AuthService,
      private dialog: MdDialog,
      private snackBar: MdSnackBar,
      private router: Router,
      private userService: UserService,
      private formBuilder: FormBuilder) {
        let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        this.signupForm = this.formBuilder.group({
          username: ['', [Validators.required, Validators.minLength(3)]],
          adress: ['', [Validators.required, Validators.minLength(3)]],
          telephone: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
          checkBoxDisclosure: ['', Validators.required]
        });
      }

    onSignup(signupForm: FormGroup) {
      this.authService.createAuthUser(signupForm.value)
        .then((authState: FirebaseAuthState) => {
          this.userService.addUserCT(new UserCT(
            authState.uid,
            signupForm.value.username,
            signupForm.value.email,
            signupForm.value.password,
            signupForm.value.telephone,
            signupForm.value.adress
          ), authState.uid)
          this.router.navigate(['/signin']);
          this.snackBar.openFromComponent( SnackBarComponent, {
            duration: 3000,
          });
        }).catch((error: Error) => {
          this.dialog.open(DialogErrorComponent)
            .componentInstance.error = error;
        })
    }

    ngOnInit(): any {
        // this.myForm = this.fb.group({
        //     email: ['', Validators.compose([
        //         Validators.required,
        //         this.isEmail
        //     ])],
        //     password: ['', Validators.required],
        //     confirmPassword: ['', Validators.compose([
        //         Validators.required,
        //         this.isEqualPassword.bind(this)
        //     ])],
        // });

    }

    // isEqualPassword(control: FormControl): {[s: string]: boolean} {
    //     if (!this.myForm) {
    //         return {passwordsNotMatch: true};
    //
    //     }
    //     if (control.value !== this.myForm.controls['password'].value) {
    //         return {passwordsNotMatch: true};
    //     }
    // }
}
