import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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
    public af: AngularFire,
    private questionService: QuestionService) {
  }

  addUserCT(newUser: UserCT, uidCT:string) {
    this.af.database.object(`/${uidCT}/data`).set(newUser);
  }

  addUserDQ(newUser: User, uidCT:string) {
    this.af.database.object(`/${uidCT}/users/${newUser.id}`).set(newUser);
  }

  getUsers(uidCT:string): FirebaseListObservable<User[]> {
    return this.af.database.list(`/${uidCT}/users`);
  }

  getUser(uidCT:string, uidDQ:string): FirebaseObjectObservable<User> {
    return this.af.database.object(`/${uidCT}/users/${uidDQ}`);
  }

  getUserCT(uidCT:string): FirebaseObjectObservable<User> {
    return this.af.database.object(`/${uidCT}/data`);
  }

  setUserCT(uidCT:string, user: {
    username: string,
    adress: string,
    telephone: number}) {
      this.af.database.object(`/${uidCT}/data`).update(user);
  }

  setUserDQ(uidCT:string, uidDQ:string, user: {
    name: string,
    telephone: number,
    telephoneOther: number,
    gender: string,
    birthday: string}) {
      this.af.database.object(`/${uidCT}/users/${uidDQ}`).update(user);

  }

  removeUserDQ(uidCT:string, uidDQ:string) {
      this.af.database.object(`/${uidCT}/users/${uidDQ}`).remove();
  }

  getSpecificUser(uidCT:string, key:string): Observable<User> {
    let uidDQ:string;
    this.af.database.list(`/${uidCT}`)
      .forEach((users) => {
        users.forEach((user) => {
          if(user.name.toUpperCase() == key.toUpperCase())
            uidDQ = user.id;
        })
      })
    return this.af.database.object(`/${uidCT}/users/${uidDQ}`);
  }

  addMessageContactRecord(uidCT:string, uidDQ:string, contact: ContactRecord) {
    this.af.database.list(`/${uidCT}/users/${uidDQ}/contacts`).push(contact);
  }

  getMessageContactRecord(uidCT:string, uidDQ:string): FirebaseListObservable<ContactRecord[]> {
    return this.af.database.list(`/${uidCT}/users/${uidDQ}/contacts`);
  }

  logOut() {
    this.af.auth.logout();
  }
}
