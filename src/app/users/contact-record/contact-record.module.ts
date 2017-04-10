import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ContactRecordComponent } from "./contact-record.component";

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MaterialModule
    ],
    declarations: [
      ContactRecordComponent
    ],
    exports: [
      ContactRecordComponent
    ]
})
export class ContactRecordModule {}
