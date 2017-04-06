import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GraphicAnswersComponent } from "./graphic-answers.component"


@NgModule({
    declarations: [
        GraphicAnswersComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        GraphicAnswersComponent
    ],
})
export class GraphicAnswersModule {}
