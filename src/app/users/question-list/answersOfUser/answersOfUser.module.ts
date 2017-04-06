import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnswersComponent } from "./answersOfUser.component"


@NgModule({
    declarations: [
        AnswersComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        AnswersComponent
    ],
})
export class AnswersModule {}
