import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';

import { UserAddComponent } from "./user-add.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    UserAddComponent
  ],
  entryComponents: [
    UserAddComponent
  ],
  exports: [
    UserAddComponent
  ]
})
export class UserAddModule {}
