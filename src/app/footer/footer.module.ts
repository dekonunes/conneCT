import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';


import { FooterComponent } from "./footer.component";
import { CreditsComponent } from './credits/credits.component';
import { DisclosureComponent } from './disclosure/disclosure.component';


@NgModule({
    imports: [
      MaterialModule
    ],
    declarations: [
      FooterComponent,
      CreditsComponent,
      DisclosureComponent
    ],
    entryComponents: [
      CreditsComponent,
      DisclosureComponent
    ],
    exports: [
      FooterComponent,
      CreditsComponent,
      DisclosureComponent
    ]
})
export class FooterModule {}
