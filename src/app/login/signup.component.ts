import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdSnackBar } from '@angular/material';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

import { SnackBarComponent } from './snack-bar.component';

@Component({
    selector: 'rb-signup',
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
    error = false;
    errorMessage = '';
    signupForm: FormGroup;

    constructor(
      public snackBar: MdSnackBar,
      private router: Router,
      public formBuilder: FormBuilder,
      private af: AngularFire) {
        let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        this.signupForm = this.formBuilder.group({
          username: ['', [Validators.required, Validators.minLength(3)]],
          adress: ['', [Validators.required, Validators.minLength(3)]],
          telephone: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        });
      }

    onSignup(signupForm: any) {
      this.af.auth.createUser({
        email: signupForm.value.email,
        password: signupForm.value.password
      })
      .then((authState: FirebaseAuthState) => {
            this.router.navigate(['/signin']);
            this.snackBar.openFromComponent( SnackBarComponent, {
              duration: 3000,
            });
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
