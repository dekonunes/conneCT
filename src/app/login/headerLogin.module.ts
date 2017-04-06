import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { HeaderLoginComponent } from "./headerlogin.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
    ],
    declarations: [
      HeaderLoginComponent,
      SignupComponent,
      SigninComponent
    ],
    exports: [
      HeaderLoginComponent,
      SignupComponent,
      SigninComponent
    ],
})
export class HeaderLoginModule {}
