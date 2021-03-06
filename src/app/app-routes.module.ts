import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { WhoUsingComponent } from "./login/who-using/who-using.component";
import { SignupComponent } from "./login/signup.component";
import { SigninComponent } from "./login/signin.component";
import { HelpComponent } from "./login/help/help.component"
import { HomeComponent } from "./home/home.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UserComponent } from "./users/user/user.component";
import { UserCTSettingComponent } from "./user-ct/user-ctsetting/user-ctsetting.component";

const APP_ROUTES: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const CHILD_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'whoUsing', component: WhoUsingComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'help', component: HelpComponent },
    { path: 'users/:idCT', component: UsersListComponent },
    { path: 'users/:idCT/user/:idDQ', component: UserComponent },
    { path: 'users/:idCT/settings', component: UserCTSettingComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
       RouterModule.forRoot(APP_ROUTES),
       RouterModule.forChild(CHILD_ROUTES)
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {}
