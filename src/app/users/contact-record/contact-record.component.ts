import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

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
  messagesContactRecord: FirebaseListObservable<ContactRecord[]>;

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService) {}

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

  getMessagensRecord() {
    let date = new Date();
    this.messagesContactRecord = this.userService.getMessageContactRecord(
      this.uidCT,
      this.uidDQ);
  }

}
