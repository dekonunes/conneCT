import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Component, OnInit } from "@angular/core";
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
export class SigninComponent implements OnInit {
    error = false;
    errorMessage = '';
    signinForm: FormGroup;

    constructor(
      private authService: AuthService,
      private dialog: MdDialog,
      public formBuilder: FormBuilder,
      private router: Router) {}

    ngOnInit(): void {
      this.buildForm();
    }


    login(signinForm: any) {
      this.authService.signinWithEmail(this.signinForm.value)
      .then(
        (success) => {
          this.router.navigate(['/users',success]);
      }).catch((error: any) => {
        let errorText: string;
        switch (error) {
          case "The email address is badly formatted.":
            errorText = 'O e-mail esta com o formato errado';
          break;
          case "The password is invalid or the user does not have a password.":
            errorText = 'A senha esta errada';
          break;
          case "There is no user record corresponding to this identifier. The user may have been deleted.":
            errorText = 'Não há nenhuma conta com esse e-mail (verifique se o e-mail esta correto)';
          break;
          case "You must include credentials to use this auth method.":
            errorText = 'Envie um e-mail para dekonunesss@gmail.com com o seu login, que retornarei o mais breve possível';
          break;
          default:
            errorText = 'Envie um e-mail para dekonunesss@gmail.com com o seu login e o problema encontrado.';
          break;
        }
        this.dialog.open(DialogErrorComponent)
          .componentInstance.error = errorText;
      })
    }

  buildForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signinForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.signinForm) { return; }
    const form = this.signinForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'E-mail é obrigatório.',
      'email': 'Deve ser um e-mail válido.'
    },
    'password': {
      'required': 'Senha é obrigatória.',
      'minlength': 'Senha deve ter no mínimo 6 letras ou números.'
    }
  };
}
