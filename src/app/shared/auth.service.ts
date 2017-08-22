import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private currentUser: firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  signinWithEmail(user: {email: string, password: string}): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      .then(authState => {
        return authState.uid;
      }).catch(this.handleError);
  }

  createAuthUser(user: {email: string, password: string}): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
      .then(authState => {
        return authState;
      }).catch(this.handleError);
  }

  private handleError(err: any): Promise<any> {
    console.log('Error:', err); // somente para exemplo
    return Promise.reject(err.message || err);
  }
}
