import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component"
import { HomeRoutingModule } from "./home-routes.module"
import { HeaderLoginModule } from "../login/headerlogin.module"

@NgModule({
    imports: [
      HomeRoutingModule,
      HeaderLoginModule,
      RouterModule
    ],
    declarations: [
      HomeComponent
    ],
    exports: [
      HomeComponent
    ],
})
export class HomeModule {}
