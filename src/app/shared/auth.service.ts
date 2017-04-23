import { Injectable } from '@angular/core';
import { AngularFireAuth, AuthMethods, AuthProviders, FirebaseAuthState} from 'angularfire2';

@Injectable()
export class AuthService {
  constructor(
    public auth: AngularFireAuth
  ) {}


  signinWithEmail(user: {email: string, password: string}): firebase.Promise<string> {
    return this.auth.login(user)
      .then((authState: FirebaseAuthState) => {
        return authState.uid;
      }).catch(this.handleError);
  }

  createAuthUser(user: {email: string, password: string}): firebase.Promise<FirebaseAuthState> {
    return this.auth.createUser(user)
      .then((authState: FirebaseAuthState) => {
        return authState;
      }).catch(this.handleError);
  }

  private handleError(err: any): Promise<any> {
    console.log('Error:', err); // somente para exemplo
    return Promise.reject(err.message || err);
  }
}
