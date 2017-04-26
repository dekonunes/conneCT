import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';


import { QuestionListComponent } from "./question-list.component";


@NgModule({
    declarations: [
        QuestionListComponent,
    ],
    imports: [
        BrowserModule,
        MaterialModule
    ],
    exports: [
        QuestionListComponent
    ],
})
export class QuestionListModule {}
