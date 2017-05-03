import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCTSettingComponent } from './user-ctsetting/user-ctsetting.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';
import { HeaderModule } from "../header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderModule
  ],
  declarations: [
    UserCTSettingComponent
  ]
})
export class UserCTModule { }
