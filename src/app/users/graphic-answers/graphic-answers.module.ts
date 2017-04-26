import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { GraphicAnswersComponent } from "./graphic-answers.component"

@NgModule({
    declarations: [
      GraphicAnswersComponent
    ],
    imports: [
      MaterialModule
    ],
    exports: [
      GraphicAnswersComponent
    ],
})
export class GraphicAnswersModule {}
