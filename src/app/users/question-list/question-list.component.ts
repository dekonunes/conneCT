import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Answer } from "../../shared/answer.model"
import { Question } from "../../shared/question.model";
import { User } from "../../shared/user.model"
import { UserService } from "../../shared/user.service";

@Component({
    selector: 'rb-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
    @Input() _questions: Question[];
    uidDQ: string;
    uidCT: string;
    answers: Answer[];

    constructor(
      private userService: UserService,
      private activatedRouter: ActivatedRoute
    ) {}

    ngOnInit() {
      this.activatedRouter.params.forEach((_params: Params) => {
        this.uidDQ = _params['idDQ'];
        this.uidCT = _params['idCT'];
      });

      this.userService.getUser(this.uidCT,this.uidDQ).first()
      .subscribe(_user =>  {
        this.answers = _user.answers
        // console.log(this.answers['-KhRHHSJeSvAa6PC9tve']);
      });


    }
}
