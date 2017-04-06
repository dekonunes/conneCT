import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
    selector: 'rb-signup',
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
    error = false;
    errorMessage = '';

    constructor(
      private router: Router,
      private af: AngularFire) {}

    onSignup(formData: any) {
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      })
      .then((authState: FirebaseAuthState) => {
          console.log(authState);
            this.router.navigate(['/signin']);
          })

      // .catch((error:any) => {
      //     console.log(error.code);
      //     console.log(error.message);
      // });
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

    // isEmail(control: FormControl): {[s: string]: boolean} {
    //     if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    //         return {noEmail: true};
    //     }
    // }

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
