import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from "rxjs/Observable";

import { User } from './user.model';
import { ContactRecord } from './contact-record.model';
import { QuestionService } from "../shared/question.service";
import { Question } from "../shared/question.model";


@Injectable()
export class UserService {
  constructor(
    public af: AngularFire,
    private questionService: QuestionService) {
  }


  // {email: string, password: string}
}
