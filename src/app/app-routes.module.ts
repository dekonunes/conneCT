import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const APP_ROUTES: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
       RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {}
