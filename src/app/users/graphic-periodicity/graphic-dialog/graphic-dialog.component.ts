import { Component, OnInit } from '@angular/core';

import { Answer } from "../../../shared/answer.model";
import { QuestionService } from "../../../shared/question.service";

@Component({
  selector: 'app-graphic-dialog',
  templateUrl: './graphic-dialog.component.html',
  styleUrls: ['./graphic-dialog.component.css']
})
export class GraphicDialogComponent implements OnInit  {
  _answers: Answer[][];
  answers: Answer[];
  _idQuestion: number;
  arrayAnswers: Array<number> = new Array<number>(new Date(new Date().getFullYear(), new Date().getMonth()+1,0).getDate());
  public lineChartData:Array<any>;

  constructor(
    private questionService: QuestionService
  ) {}

  ngOnInit() {

    for (let ind in this._answers) {
      this.answers = this._answers[ind];
      this.arrayAnswers[new Date(this.answers[this._idQuestion].date).getDate()-1] = this.answers[this._idQuestion].answersNumber;
    }

    this.lineChartData = [
      {data: this.arrayAnswers, label: this.questionService.getQuestion()[this._idQuestion].title}
    ];
  }

  public lineChartLabels:Array<any> = this.range(
    1,
    new Date(new Date().getFullYear(), new Date().getMonth()+1,0).getDate(),
    1);

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'black',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartOptions:any = {
    scales: {
      yAxes: [{
            ticks: {
              callback: ((val:any) => Number.isInteger(val) ? val : null),
              min: 1,
              max: 5,
            }
          }
        ]
      }
    }


  range (start:number, end:number, step:number) {
    let range = [];

    if (end < start) {
        step = -step;
    }

    while (step > 0 ? end >= start : end <= start) {
        range.push(start);
        start += step;
    }

    return range;
  }
}
