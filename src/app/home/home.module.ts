import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component"
import { HeaderLoginModule } from "../login/header-login.module"

@NgModule({
    imports: [
      HeaderLoginModule
    ],
    declarations: [
      HomeComponent
    ],
    exports: [
      HomeComponent
    ],
})
export class HomeModule {}
