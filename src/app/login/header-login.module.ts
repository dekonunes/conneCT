import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { HeaderLoginComponent } from "./header-login.component";
import { SnackBarComponent } from "./snack-bar.component";
import { DialogErrorComponent } from '../shared/dialog-error.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule,
      MaterialModule
    ],
    entryComponents: [
      SnackBarComponent      
    ],
    declarations: [
      HeaderLoginComponent,
      SignupComponent,
      SigninComponent,
      SnackBarComponent
    ],
    exports: [
      HeaderLoginComponent,
      SignupComponent,
      SigninComponent,
      SnackBarComponent
    ],
})
export class HeaderLoginModule {}
