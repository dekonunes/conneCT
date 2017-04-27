import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

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
export class UserAddComponent implements OnInit {
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
        telephone: ['', [Validators.required, Validators.minLength(6)]],
        telephoneOther: ['', [Validators.required, Validators.minLength(6)]],
        gender: ['', Validators.required],
        birthday: ['', Validators.required]
      });
      this.newUserForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

      this.onValueChanged();
      this.iconRegistry.addSvgIcon(
        'gender',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/gender.svg'));
      this.iconRegistry.addSvgIcon(
        'cake',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/cake.svg'));
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.newUserForm) {
            return {passwordsNotMatch: true};

        }
        if (control.value !== this.newUserForm.controls['password'].value) {
            return {passwordsNotMatch: true};
        }
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
