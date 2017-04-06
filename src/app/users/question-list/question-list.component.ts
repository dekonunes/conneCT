import { Component, Input  } from '@angular/core';

import { Question } from "../../shared/question.model";

@Component({
    selector: 'rb-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent{
    @Input() _questions: Question[];
    constructor() {}
}
