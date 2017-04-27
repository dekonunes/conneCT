import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
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
      private formBuilder: FormBuilder) {}

    buildForm() {
      this.signupForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        adress: ['', [Validators.required, Validators.minLength(4)]],
        telephone: ['', [Validators.required, Validators.minLength(10)]],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6),this.isEqualPassword.bind(this)]],
        checkBoxDisclosure: ['', Validators.required]
      });
      this.signupForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

      this.onValueChanged();
    }

    onSignup(signupForm: FormGroup) {
      this.authService.createAuthUser(signupForm.value)
        .then((authState: FirebaseAuthState) => {
          this.userService.addUserCT(new UserCT(
            authState.uid,
            signupForm.value.name,
            signupForm.value.email,
            signupForm.value.password,
            signupForm.value.telephone,
            signupForm.value.adress
          ), authState.uid)
          this.router.navigate(['/signin']);
          this.snackBar.openFromComponent( SnackBarComponent, {
            duration: 5000,
          });
        }).catch((error: Error) => {
          this.dialog.open(DialogErrorComponent)
            .componentInstance.error = error;
        })
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.signupForm) {
            return {passwordsNotMatch: true};

        }
        if (control.value !== this.signupForm.controls['password'].value) {
            return {passwordsNotMatch: true};
        }
    }

    ngOnInit() {
      this.buildForm();
        //     password: ['', Validators.required],
        //     confirmPassword: ['', Validators.compose([
        //         Validators.required,
        //         this.isEqualPassword.bind(this)

    }

    onValueChanged(data?: any) {
      if (!this.signupForm) { return; }
      const form = this.signupForm;

      for (const field in this.formErrors) {
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
      'name': '',
      'adress': '',
      'telephone': '',
      'email': '',
      'password': '',
      'confirmPassword': '',
      'checkedCheckBox': ''
    };

    validationMessages = {
      'name': {
        'required': 'Nome é obrigatório.',
        'minlength': 'Nome deve ter no mínimo 4 letras.'
      },
      'adress': {
        'required': 'Nome da cidade é obrigatório.',
        'minlength': 'Nome da cidade deve ter no mínimo 4 letras.'
      },
      'telephone': {
        'required': 'Telefone é obrigatório.',
        'minlength': 'Telefone deve ter no mínimo 11 números (Não esqueça do DDD).'
      },
      'email': {
        'required': 'E-mail é obrigatório.',
        'email': 'Deve ser um e-mail válido.'
      },
      'password': {
        'required': 'Senha é obrigatória.',
        'minlength': 'Senha deve ter no mínimo 6 letras ou números.'
      },
      'confirmPassword': {
        'required': 'Confirmação de senha é obrigatório.',
        'minlength': 'Senha deve ter no mínimo 6 letras ou números.',
        'passwordsNotMatch': 'Senha não confere com a senha digitada'
      },
      'checkedCheckBox': {
        'required': 'Você deve aceitar os temos de uso.'
      }
    };
}
