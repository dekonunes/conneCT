import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../../shared/user.service";
import { ContactRecord } from "../../shared/contact-record.model";

@Component({
  selector: 'rb-contact-record',
  templateUrl: './contact-record.component.html',
  styleUrls: ['./contact-record.component.css'],

})
export class ContactRecordComponent implements OnInit {
  uidCT: string;
  uidDQ: string;
  contactForm: FormGroup;
  messagesContactRecord: ContactRecord[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService,
    public formBuilder: FormBuilder) {

      this.contactForm = this.formBuilder.group({
        nameContact: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        messageContact: ['', [Validators.required]],
      });
    }

  ngOnInit() {
    this.activatedRouter.params.forEach((_params: Params) => {
      this.uidCT = _params['idCT'];
      this.uidDQ = _params['idDQ'];
    });
    this.getMessagensRecord();
  }

  onSubmit(formData: any) {
    let date = new Date();
    this.userService.addMessageContactRecord(
      this.uidCT,
      this.uidDQ,
       new ContactRecord(
         formData.value.nameContact,
         date,
         formData.value.messageContact));
    this.getMessagensRecord();
  }

  reverseArray() {
    this.messagesContactRecord.reverse();
  }

  getMessagensRecord() {
    let date = new Date();
    this.userService.getMessageContactRecord(this.uidCT,this.uidDQ)
      .subscribe(_messagesContactRecord => {
        this.messagesContactRecord = _messagesContactRecord
        this.reverseArray()});
    ;
  }

}
