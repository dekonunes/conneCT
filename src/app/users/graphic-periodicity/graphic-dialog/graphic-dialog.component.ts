import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-dialog',
  templateUrl: './graphic-dialog.component.html',
  styleUrls: ['./graphic-dialog.component.css']
})
export class GraphicDialogComponent {

  // lineChart
  public lineChartData:Array<any> = [
    {data: [0, 2, 5, 1, 4, 3, 1], label: 'Familia'}
  ];

  public lineChartLabels:Array<any> = this.range(
    1,
    new Date(new Date().getFullYear(), new Date().getMonth()+1,
    0).getDate(),1);

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
