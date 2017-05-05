import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import { AuthService } from "../../shared/auth.service";
import { MdDialogRef, MdDialog } from "@angular/material";
import { User } from "../../shared/user.model"
import { UserService } from "../../shared/user.service";
import { QuestionService } from "../../shared/question.service";
import { GamificationService } from "../../shared/gamification.service";
import { DialogErrorComponent } from "../../shared/dialog-error.component";


@Component({
    selector: 'rb-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
    uidCT:string;
    newUserForm: FormGroup;

    genders = [
        'Feminino',
        'Masculino'
    ];

    constructor(
      private authService: AuthService,
      private sanitizer: DomSanitizer,
      private dialog: MdDialog,
      public dialogRef: MdDialogRef<UserAddComponent>,
      public formBuilder: FormBuilder,
      private userService: UserService,
      private gamificationService: GamificationService,
      private questionService: QuestionService) {}

    ngOnInit() {
      this.buildForm();
    }

    buildForm() {
      this.newUserForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6),this.isEqualPassword.bind(this)]],
        telephone: ['', [Validators.required, Validators.minLength(10)]],
        telephoneOther: ['', [Validators.required, Validators.minLength(10)]],
        gender: ['', Validators.required],
        birthday: ['', Validators.required]
      });
      this.newUserForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

      this.onValueChanged();
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.newUserForm)
          return {passwordsNotMatch: true};
        if (control.value !== this.newUserForm.controls['password'].value)
          return {passwordsNotMatch: true};
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
            null,
            this.gamificationService.getGamification())
              ,this.uidCT);
            this.dialogRef.close();
      }).catch((error: any) => {
        let errorText: string;
        switch (error) {
          case "The email address is badly formatted.":
            errorText = 'O e-mail esta com o formato errado.';
          break;
          case "The password is invalid or the user does not have a password.":
            errorText = 'A senha esta errada';
          break;
          case "There is no user record corresponding to this identifier. The user may have been deleted.":
            errorText = 'Não há nenhuma conta com esse e-mail (verifique se o e-mail esta correto).';
          break;
          case "The email address is already in use by another account.":
            errorText = 'Esse e-mail já esta sendo usado.';
          break;
          default:
            errorText = 'Envie um e-mail para dekonunesss@gmail.com com o seu login e o problema encontrado.';
          break;
        }
        this.dialog.open(DialogErrorComponent)
          .componentInstance.error = errorText;
      })
    }

    onValueChanged(data?: any) {
      if (!this.newUserForm) { return; }
      const form = this.newUserForm;

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
      'email': '',
      'password': '',
      'confirmPassword': '',
      'telephone': '',
      'telephoneOther': '',
      'gender': '',
      'birthday': ''
    };

    validationMessages = {
      'name': {
        'required': 'Nome é obrigatório.',
        'minlength': 'Nome deve ter no mínimo 4 letras.'
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

      'telephone': {
        'required': 'Telefone é obrigatório.',
        'minlength': 'Telefone deve ter no mínimo 11 números (Não esqueça do DDD).'
      },
      'telephoneOther': {
        'required': 'Telefone é obrigatório.',
        'minlength': 'Telefone deve ter no mínimo 11 números (Não esqueça do DDD).'
      },
      'gender': {
        'required': 'Nome da cidade é obrigatório.'
      },
      'birthday': {
        'required': 'Data de nascimento obrigatório.'
      }
    };
}
