import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { GraphicPeriodicityComponent } from "./graphic-periodicity.component"

@NgModule({
    declarations: [
      GraphicPeriodicityComponent
    ],
    imports: [
      MaterialModule
    ],
    exports: [
      GraphicPeriodicityComponent
    ],
})
export class GraphicPeriodicityModule {}
