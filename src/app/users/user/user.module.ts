import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';

import { UserComponent } from "./user.component";
import { HeaderModule } from "../../header/header.module";
import { QuestionListModule } from "../question-list/question-list.module";
import { ContactRecordModule } from "../contact-record/contact-record.module";
import { GraphicPeriodicityModule } from "../graphic-periodicity/graphic-periodicity.module";
import { EditUserComponent } from './edit-user/edit-user.component'

@NgModule({
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      ContactRecordModule,
      GraphicPeriodicityModule,
      MaterialModule,
      HeaderModule,
      QuestionListModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
      UserComponent,
      EditUserComponent
    ],
    entryComponents: [
      EditUserComponent
    ],
    exports: [
      UserComponent
    ],
})
export class UserModule {}
