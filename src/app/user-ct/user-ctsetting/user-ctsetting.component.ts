import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import { UserCT } from '../../shared/userCT.model';
import { UserService } from "../../shared/user.service";

@Component({
  selector: 'app-user-ctsetting',
  templateUrl: './user-ctsetting.component.html',
  styleUrls: ['./user-ctsetting.component.css']
})
export class UserCTSettingComponent implements OnInit {
  editForm: FormGroup;
  _userCT: UserCT;
  uidCT: string;
  isSpinner: boolean = true;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.activatedRouter.params
      .forEach((_params: Params) => {
      this.uidCT = _params['idCT'];
    });

    this.userService.getUserCT(this.uidCT)
      .first()
      .subscribe(_user => {
        this._userCT = _user;
        this.buildForm();
        this.isSpinner = false;
      });


  }

  onEdit(editForm: FormGroup) {
    this.userService.setUserCT(this.uidCT,this.editForm.value);
    this.router.navigate([`/users/${this.uidCT}`]);
  }

  buildForm() {
    console.log(this._userCT.username)
    this.editForm = this.formBuilder.group({
      username: [this._userCT.username, [Validators.required, Validators.minLength(4)]],
      adress: [this._userCT.adress, [Validators.required, Validators.minLength(4)]],
      telephone: [this._userCT.telephone, [Validators.required, Validators.minLength(10)]],
      email: [{value: this._userCT.email, disabled: true}],
      password: [{value: this._userCT.password, disabled: true}],
    });
    this.editForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.editForm) { return; }
    const form = this.editForm;

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
    'telephone': ''
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
    }
  };

}
