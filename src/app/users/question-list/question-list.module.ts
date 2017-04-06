import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { GraphicAnswersModule } from "./graphic-answers/graphic-answers.module"
import { GraphicPeriodicityModule } from "./graphic-periodicity/graphic-periodicity.module"
import { AnswersModule } from "./answersOfUser/answersOfUser.module"
import { QuestionListComponent } from "./question-list.component";


@NgModule({
    declarations: [
        QuestionListComponent,
    ],
    imports: [
        AnswersModule,
        BrowserModule,
        GraphicAnswersModule,
        GraphicPeriodicityModule,
        MaterialModule
    ],
    exports: [
        QuestionListComponent
    ],
})
export class QuestionListModule {}
