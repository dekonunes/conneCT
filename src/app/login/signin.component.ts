import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdDialog } from '@angular/material';

import { AuthService } from "../shared/auth.service";
import { DialogErrorComponent } from '../shared/dialog-error.component';

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
      private authService: AuthService,
      private dialog: MdDialog,
      public formBuilder: FormBuilder,
      private router: Router) {

        let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        this.signinForm = this.formBuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          password: ['', [Validators.required, Validators.minLength(6)]],
        });
      }

    login(signinForm: any) {
      this.authService.signinWithEmail(this.signinForm.value)
      .then(
        (success) => {
          this.router.navigate(['/users',success]);
      }).catch((error: Error) => {
        this.dialog.open(DialogErrorComponent)
          .componentInstance.error = error;
      })

  }
}
