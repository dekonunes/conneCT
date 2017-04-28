import { Component, Input, OnInit  } from '@angular/core';

import { Question } from "../../shared/question.model";

@Component({
    selector: 'rb-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
    @Input() _questions: Question[];

    collapse: boolean = false;
    numberQuestion: number;
    constructor() {}

    ngOnInit() {}

    collapseDescription(index: number) {
      this.numberQuestion = index;
      this.collapse = !this.collapse;
    }
}
