import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GraphicPeriodicityComponent } from "./graphic-periodicity.component"


@NgModule({
    declarations: [
      GraphicPeriodicityComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
      GraphicPeriodicityComponent
    ],
})
export class GraphicPeriodicityModule {}
