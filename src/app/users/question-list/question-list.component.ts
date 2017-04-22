import { Component, Input, OnInit  } from '@angular/core';

import { Answer } from "../../shared/answer.model"
import { Question } from "../../shared/question.model";

@Component({
    selector: 'rb-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
    @Input() _questions: Question[];
    @Input() _answers: Answer[][];
    answers: Answer[] = [];
    collapse: boolean = false;
    numberQuestion: number;
    constructor() {}

    ngOnInit() {
      let lastProperty: any;
      if(this._answers) {
        for (lastProperty in this._answers){}
        this.answers = this._answers[lastProperty];
      }
    }

    collapseDescription(index: number) {
      this.numberQuestion = index;
      this.collapse = !this.collapse;
    }
}
