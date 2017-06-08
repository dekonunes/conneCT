import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

import { User } from './user.model';
import { UserCT } from './userCT.model';
import { ContactRecord } from './contact-record.model';
import { QuestionService } from "../shared/question.service";
import { Question } from "../shared/question.model";
import { Answer } from "../shared/answer.model";


@Injectable()
export class UserService {

  questions: Question[];

  constructor(
    public af: AngularFireDatabase,
    private questionService: QuestionService) {
  }

  addUserCT(newUser: UserCT, uidCT:string) {
    this.af.object(`/${uidCT}/data`).set(newUser);
  }

  addUserDQ(newUser: User, uidCT:string) {
    this.af.object(`/${uidCT}/users/${newUser.id}`).set(newUser);
  }

  getUsers(uidCT:string): FirebaseListObservable<User[]> {
    return this.af.list(`/${uidCT}/users`);
  }

  getUser(uidCT:string, uidDQ:string): FirebaseObjectObservable<User> {
    return this.af.object(`/${uidCT}/users/${uidDQ}`);
  }

  getUserCT(uidCT:string): FirebaseObjectObservable<User> {
    return this.af.object(`/${uidCT}/data`);
  }

  setUserCT(uidCT:string, user: {
    username: string,
    adress: string,
    telephone: number}) {
      this.af.object(`/${uidCT}/data`).update(user);
  }

  setUserDQ(uidCT:string, uidDQ:string, user: {
    name: string,
    telephone: number,
    telephoneOther: number,
    gender: string,
    birthday: string}) {
      this.af.object(`/${uidCT}/users/${uidDQ}`).update(user);

  }

  removeUserDQ(uidCT:string, uidDQ:string) {
      this.af.object(`/${uidCT}/users/${uidDQ}`).remove();
  }

  getSpecificUser(uidCT:string, key:string): Observable<User> {
    let uidDQ:string;
    this.af.list(`/${uidCT}`)
      .forEach((users) => {
        users.forEach((user) => {
          if(user.name.toUpperCase() == key.toUpperCase())
            uidDQ = user.id;
        })
      })
    return this.af.object(`/${uidCT}/users/${uidDQ}`);
  }

  addMessageContactRecord(uidCT:string, uidDQ:string, contact: ContactRecord) {
    this.af.list(`/${uidCT}/users/${uidDQ}/contacts`).push(contact);
  }

  getMessageContactRecord(uidCT:string, uidDQ:string): FirebaseListObservable<ContactRecord[]> {
    return this.af.list(`/${uidCT}/users/${uidDQ}/contacts`);
  }


}
