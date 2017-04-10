import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    selector: 'rb-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    error = false;
    errorMessage = '';
    signinForm: FormGroup;

    constructor(
      private af: AngularFire,
      public formBuilder: FormBuilder,
      private router: Router) {

        let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        this.signinForm = this.formBuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          password: ['', [Validators.required, Validators.minLength(6)]],
        });
      }

    login(signinForm: any) {
      if(signinForm.valid) {
        this.af.auth.login({
          email: signinForm.value.email,
          password: signinForm.value.password
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then(
          (success) => {
          this.router.navigate(['/users',success.uid]);
        }).catch(
          (err: any) => {
          console.log(err);
          this.error = err;
        })
      }
  }
}
