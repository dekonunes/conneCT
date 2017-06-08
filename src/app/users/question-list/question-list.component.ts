import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Question } from "../../shared/question.model";
import { User } from "../../shared/user.model";
import { UserService } from "../../shared/user.service";
import { Answer } from "../../shared/answer.model";
import { GraphicDialogComponent } from "./graphic-dialog/graphic-dialog.component";

@Component({
    selector: 'rb-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
    uidDQ: string;
    uidCT: string;
    user: User;
    answers: Answer[] = [];
    collapse: boolean = false;
    numberQuestion: number;

    constructor(
      private activatedRouter: ActivatedRoute,
      private userService: UserService,
      private dialog: MdDialog
    ) {}

    ngOnInit() {
      this.getUIDs();
      this.getUser().then(() => this.getAnswers());
    }

    getAnswers() {
      let lastProperty: any;
      if(this.user.answers) {
        for(let i = 0; i < this.user.answers.length; i++) {
          this.answers[i] = this.user.answers[i][Object.keys(this.user.answers[i])[Object.keys(this.user.answers[i]).length-1]];
        }
      }
    }

    graphicDialog (idQuestion: number) {
      let dialogRef = this.dialog.open(GraphicDialogComponent, {
                height: '600px',
                width: '1000px'});
      dialogRef.componentInstance.answers = this.user.answers;
      dialogRef.componentInstance._idQuestion = idQuestion;
    }

    collapseDescription(index: number) {
      this.numberQuestion = index;
      this.collapse = !this.collapse;
    }

    getUser(): Promise<any> {
      return new Promise(resolve => {
        this.userService.getUser(this.uidCT,this.uidDQ)
        .first()
        .subscribe((_user:User) => {
          this.user = _user
          resolve();
        });
      });
    }

    getUIDs() {
      this.activatedRouter.params
        .forEach((_params: Params) => {
        this.uidDQ = _params['idDQ'];
        this.uidCT = _params['idCT'];
      });
    }
}
