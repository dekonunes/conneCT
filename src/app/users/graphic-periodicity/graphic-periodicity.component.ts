import { Component, Input, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Answer } from "../../shared/answer.model";
import { GraphicDialogComponent } from "./graphic-dialog/graphic-dialog.component";

@Component({
  selector: 'rb-graphic-periodicity',
  templateUrl: './graphic-periodicity.component.html',
  styleUrls: ['./graphic-periodicity.component.css']
})
export class GraphicPeriodicityComponent implements OnInit {
  @Input() _answers: Answer[][];
  @Input() _numberOfQuestions: number;
  arrayNumberOfQuestions = Array;
  answers: Answer[] = [];

  constructor(
    private dialog: MdDialog
  ) {}

  ngOnInit() {
    let lastProperty: any;
    if(this._answers) {
      for (lastProperty in this._answers){}
      this.answers = this._answers[lastProperty];
    }
  }

  graphicDialog (idQuestion: number) {
    let dialogRef = this.dialog.open(GraphicDialogComponent, [this._answers,idQuestion])
    dialogRef.componentInstance._answers = this._answers;
    dialogRef.componentInstance._idQuestion = idQuestion;
  }

}
