import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MdDialogRef, MdIconRegistry, MdDialog } from "@angular/material";
import { User } from "../../../shared/user.model"
import { UserService } from "../../../shared/user.service";
import { DialogErrorComponent } from "../../../shared/dialog-error.component";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  _uidDQ: string;
  _uidCT: string;
  _user: User;
  editUserForm: FormGroup;

  constructor(
    private iconRegistry: MdIconRegistry,
    private router: Router,
    private dialog: MdDialog,
    private sanitizer: DomSanitizer,
    public dialogRef: MdDialogRef<EditUserComponent>,
    public formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.iconRegistry.addSvgIcon(
      'gender',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/gender.svg'));
    this.iconRegistry.addSvgIcon(
      'cake',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/cake.svg'));
    this.editUserForm = this.formBuilder.group({
      name: [this._user.name, [Validators.required, Validators.minLength(3)]],
      email: [{value: this._user.email, disabled: true}],
      password: [{value: this._user.password, disabled: true}],
      confirmPassword: [{value: this._user.password, disabled: true}],
      telephone: [this._user.telephone, [Validators.required, Validators.minLength(10)]],
      telephoneOther: [this._user.telephoneOther, [Validators.required, Validators.minLength(10)]],
      gender: [this._user.gender, Validators.required],
      birthday: [this._user.birthday, Validators.required]
    });
    this.editUserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  onSubmit(formData: any) {
    this.userService.setUserDQ(this._uidCT, this._uidDQ, this.editUserForm.value);
    this.dialogRef.close();
    location.reload();
  }

  removeDQ() {
    this.userService.removeUserDQ(this._uidCT, this._uidDQ);
    this.dialogRef.close();
    this.router.navigate([`/users/${this._uidCT}`]);
  }

  onValueChanged(data?: any) {
    if (!this.editUserForm) { return; }
    const form = this.editUserForm;

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
    'telephone': '',
    'telephoneOther': ''
  };

  validationMessages = {
    'name': {
      'required': 'Nome é obrigatório.',
      'minlength': 'Nome deve ter no mínimo 4 letras.'
    },
    'telephone': {
      'required': 'Telefone é obrigatório.',
      'minlength': 'Telefone deve ter no mínimo 11 números (Não esqueça do DDD).'
    },
    'telephoneOther': {
      'required': 'Telefone é obrigatório.',
      'minlength': 'Telefone deve ter no mínimo 11 números (Não esqueça do DDD).'
    }
  };

}
