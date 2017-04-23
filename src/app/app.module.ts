import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from "./shared/auth.service";
import { AppComponent } from "./app.component";
import { ContactRecordModule } from "./users/contact-record/contact-record.module";
import { DialogErrorComponent } from "./shared/dialog-error.component";
import { UserService } from "./shared/user.service";
import { FooterModule } from "./footer/footer.module"
import { HeaderModule } from "./header/header.module";
import { HeaderLoginModule } from "./login/header-login.module";
import { HomeModule } from "./home/home.module";
import { AppRoutingModule } from "./app-routes.module";
import { UserAddModule } from "./users/user-add/user-add.module";
import { UserModule } from "./users/user/user.module";
import { UsersListModule } from './users/users-list/users-list.module';
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
        DialogErrorComponent
    ],
    entryComponents: [
      DialogErrorComponent
    ],
    imports: [
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
        BrowserModule,
        ContactRecordModule,
        FormsModule,
        FooterModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HeaderModule,
        HeaderLoginModule,
        HttpModule,
        HomeModule,
        QuestionListModule,
        UserAddModule,
        UserModule,
        UsersListModule,
        MaterialModule
    ],
    providers: [
        AuthService,
        QuestionService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
