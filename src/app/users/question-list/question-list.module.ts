import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { QuestionListComponent } from "./question-list.component";
import { GraphicDialogComponent } from './graphic-dialog/graphic-dialog.component'


@NgModule({
    declarations: [
        QuestionListComponent,
        GraphicDialogComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        ChartsModule
    ],
    entryComponents: [
      GraphicDialogComponent
    ],
    exports: [
      QuestionListComponent
    ],
})
export class QuestionListModule {}
