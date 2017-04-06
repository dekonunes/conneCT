import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { UserAddComponent } from "./user-add.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    UserAddComponent
  ],
  entryComponents: [
    UserAddComponent
  ],
  exports: [
  ],
})
export class UserAddModule {}
