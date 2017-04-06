import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from "./app.component";
import { ContactRecordComponent } from "./users/contact-record";
import { DropdownDirective } from "./shared/dropdown.directive";
import { UserService } from "./shared/user.service";
import { FooterComponent } from "./footer/footer.component"
import { HeaderModule } from "./header/header.module";
import { HeaderLoginModule } from "./login/headerlogin.module";
import { HomeModule } from "./home/home.module";
import { AppRoutingModule } from "./app-routes.module";
import { UserAddModule } from "./users/user-add/user-add.module";
import { UserComponent } from "./users/userPage/user.component";
import { UsersListComponent } from './users/users-list/users-list.component';
import { QuestionListModule } from "./users/question-list/question-list.module";
import { QuestionService } from "./shared/question.service";

const myFirebaseConfig = {
  apiKey: "AIzaSyAL-OyrHkTqw4j4sgcapSnFKi0wFc61dNo",
  authDomain: "connect-48f5c.firebaseapp.com",
  databaseURL: "https://connect-48f5c.firebaseio.com",
  storageBucket: "connect-48f5c.appspot.com",
  messagingSenderId: "882656858836"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
    declarations: [
        AppComponent,
        ContactRecordComponent,
        DropdownDirective,
        FooterComponent,
        UserComponent,
        UsersListComponent
    ],
    imports: [
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HeaderModule,
        HeaderLoginModule,
        HttpModule,
        HomeModule,
        QuestionListModule,
        UserAddModule,
        MaterialModule
    ],
    providers: [
        QuestionService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
