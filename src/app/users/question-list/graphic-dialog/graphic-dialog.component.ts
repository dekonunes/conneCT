import { Component, OnInit } from '@angular/core';

import { Answer } from "../../../shared/answer.model";
import { QuestionService } from "../../../shared/question.service";

@Component({
  selector: 'app-graphic-dialog',
  templateUrl: './graphic-dialog.component.html',
  styleUrls: ['./graphic-dialog.component.css']
})
export class GraphicDialogComponent implements OnInit  {
  answers: Answer[];
  _idQuestion: number;
  arrayAnswers: Array<number> = new Array<number>(new Date(new Date().getFullYear(), new Date().getMonth()+1,0).getDate());
  public lineChartData:Array<any>;

  constructor(
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    //console.log(this.datesAnswers(new Date().getDate()))
    let date = new Date();
    //console.log(new Date(date.getFullYear(),date.getMonth(),2))
    
    for (let ind in this.answers[this._idQuestion]) {
      if (this.answers[this._idQuestion][ind]) {
        let dateAnswer = new Date(this.answers[this._idQuestion][ind].date);
        this.datesAnswers().forEach((element, index) => {
          if(dateAnswer.getDate() == element.getDate() && dateAnswer.getMonth() == element.getMonth() && dateAnswer.getFullYear() == element.getFullYear())
            this.arrayAnswers[index] = this.answers[this._idQuestion][ind].answersNumber;  
        });        
      }
    }

    this.lineChartData = [
      {
        data: this.arrayAnswers,
        label: this.questionService.getQuestion()[this._idQuestion].title
      }
    ];
  }

  public lineChartLabels:Array<any> = 
    this.range(new Date().getDate());

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,0,255,0.2)',
      borderColor: 'rgba(0,0,255,0.5)',
      pointBackgroundColor: 'blue',
      pointBorderColor: 'blue',
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
              max: 5
            },
          }
        ]
      }
    }

    datesAnswers() {
      let date = new Date();
      let datas = [];
      let daysLastMonth = new Date(date.getFullYear(),date.getMonth()-2,0).getDate();
      let step = date.getDate() - daysLastMonth;
      while (step <= date.getDate()) {
        if(step <= 0) {
          datas.push(new Date(date.getFullYear(),date.getMonth()-1,daysLastMonth+step))
          step++;
        } else {
          datas.push(new Date(date.getFullYear(),date.getMonth(),step))
          step++;
        }
      }
      return datas;
    }

    range(start:number) {
      let range = [];
      let date = new Date();
      let daysLastMonth = new Date(date.getFullYear(),date.getMonth()-2,0).getDate();
      let step = start - daysLastMonth;
      while (step <= start) {
        if(step <= 0) {
          range.push(daysLastMonth+step);
          step++;
        } else {
          range.push(step);
          step++;
        }
      }
      return range;
    }
}
