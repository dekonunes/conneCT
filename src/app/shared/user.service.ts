import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from "rxjs/Observable";

import { User } from './user.model';
import { ContactRecord } from './contact-record.model';
import { QuestionService } from "../shared/question.service";
import { Question } from "../shared/question.model";


@Injectable()
export class UserService {

  questions: Question[];

  constructor(
    public af: AngularFire,
    private questionService: QuestionService) {
  }

  addUser(newUser: User, uidCT:string) {
    this.questions = this.questionService.getQuestion();
    this.af.database.object(`/${uidCT}/${newUser.id}`).set(newUser);
  }

  getUsers(uidCT:string): FirebaseListObservable<User[]> {
    return this.af.database.list(`/${uidCT}`);
  }

  getUser(uidCT:string, uidDQ:string): FirebaseObjectObservable<User> {
    return this.af.database.object(`/${uidCT}/${uidDQ}`);
  }

  getSpecificUser(uidCT:string, key:string): Observable<User> { //: FirebaseObjectObservable<User> {
    let uidDQ:string;
    this.af.database.list(`/${uidCT}`)
      .forEach((users) => {
        users.forEach((user) => {
          if(user.name.toUpperCase() == key.toUpperCase())
            uidDQ = user.id;
        })
      })
    return this.af.database.object(`/${uidCT}/${uidDQ}`);
  }

  addMessageContactRecord(uidCT:string, uidDQ:string, contact: ContactRecord) {
    this.af.database.list(`/${uidCT}/${uidDQ}/contacts`).push(contact);
  }

  getMessageContactRecord(uidCT:string, uidDQ:string): FirebaseListObservable<ContactRecord[]> {
    return this.af.database.list(`/${uidCT}/${uidDQ}/contacts`);
  }
}
