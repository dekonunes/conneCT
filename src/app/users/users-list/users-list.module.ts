import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { UsersListComponent } from "./users-list.component";
import { HeaderModule } from "../../header/header.module";

@NgModule({
    imports: [
      BrowserModule,
      MaterialModule,
      BrowserAnimationsModule,
      HeaderModule
    ],
    declarations: [
      UsersListComponent
    ],
    exports: [
      UsersListComponent
    ]
})
export class UsersListModule {}
