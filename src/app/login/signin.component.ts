import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    selector: 'rb-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    error = false;
    errorMessage = '';

    constructor(
      private af: AngularFire,
      private router: Router) {}

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
      return {
        'form-group': true,
        'has-danger': !isValid && !isPristine,
        'has-sucess': isValid
      }
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
      return {
        'form-control': true,
        'form-control-danger': !isValid && !isPristine,
        'form-control-sucess': isValid
      }
    }

    login(formData: any) {
      if(formData.valid) {
        this.af.auth.login({
          email: formData.value.email,
          password: formData.value.password
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
