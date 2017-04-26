import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { UserComponent } from "./user.component";
import { HeaderModule } from "../../header/header.module";
import { QuestionListModule } from "../question-list/question-list.module";
import { ContactRecordModule } from "../contact-record/contact-record.module";
import { GraphicAnswersModule } from "../graphic-answers/graphic-answers.module"
import { GraphicPeriodicityModule } from "../graphic-periodicity/graphic-periodicity.module"

@NgModule({
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      ContactRecordModule,
      GraphicAnswersModule,
      GraphicPeriodicityModule,
      MaterialModule,
      HeaderModule,
      QuestionListModule
    ],
    declarations: [
      UserComponent
    ],
    exports: [
      UserComponent
    ],
})
export class UserModule {}
