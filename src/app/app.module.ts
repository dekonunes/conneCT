import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'hammerjs';
import * as firebase from 'firebase/app';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from "./shared/auth.service";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routes.module";
import { ContactRecordModule } from "./users/contact-record/contact-record.module";
import { DialogErrorComponent } from "./shared/dialog-error.component";
import { UserService } from "./shared/user.service";
import { GamificationService } from "./shared/gamification.service";
import { FooterModule } from "./footer/footer.module"
import { HeaderModule } from "./header/header.module";
import { HeaderLoginModule } from "./login/header-login.module";
import { HomeModule } from "./home/home.module";
import { UserAddModule } from "./users/user-add/user-add.module";
import { UserModule } from "./users/user/user.module";
import { UserCTModule } from "./user-ct/user-ct.module";
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

@NgModule({
    declarations: [
        AppComponent,
        DialogErrorComponent
    ],
    entryComponents: [
      DialogErrorComponent
    ],
    imports: [
        AngularFireModule.initializeApp(myFirebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
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
        UserCTModule,
        UsersListModule,
        ChartsModule,
        MaterialModule
    ],
    providers: [
        AuthService,
        QuestionService,
        UserService,
        GamificationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
