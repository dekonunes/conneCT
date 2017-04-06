import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "../login/signup.component";
import { SigninComponent } from "../login/signin.component";
import { HomeComponent } from "./home.component";
import { UsersListComponent } from "../users/users-list/users-list.component";
import { UserComponent } from "../users/userPage/user.component";

export const HOME_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'users/:idCT', component: UsersListComponent },
    { path: 'users/user/:idCT/:idDQ', component: UserComponent }
];

@NgModule({
    imports: [
       RouterModule.forChild(HOME_ROUTES)
    ],
    exports: [
      RouterModule
    ]
})

export class HomeRoutingModule {}
