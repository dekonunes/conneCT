import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { GraphicPeriodicityComponent } from "./graphic-periodicity.component";
import { GraphicDialogComponent } from './graphic-dialog/graphic-dialog.component'

@NgModule({
    declarations: [
      GraphicPeriodicityComponent,
      GraphicDialogComponent
    ],
    imports: [
      MaterialModule,
      BrowserModule,
      ChartsModule
    ],
    entryComponents: [
      GraphicDialogComponent
    ],
    exports: [
      GraphicPeriodicityComponent
    ],
})
export class GraphicPeriodicityModule {}
