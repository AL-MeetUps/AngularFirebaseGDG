import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private currentUserSource = new Subject<User>();
  public currentUser$ = this.currentUserSource.asObservable();

  constructor(private afAuth: AngularFireAuth) {
    this.syncCurrentUser();
  }

  loginByGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  userState() {
    return this.afAuth.authState;
  }

  private syncCurrentUser() {
    this.afAuth.authState.subscribe((user) => {
      const result = (user) ? this.getCurrentUser(user) : null;
      this.currentUserSource.next(result);
    });
  }

  private getCurrentUser(user: any) {
    const currentUser = <User>{};
    currentUser.uid = user.uid;
    currentUser.displayName = user.displayName;
    currentUser.email = user.email;
    currentUser.photoURL = user.photoURL;
    return currentUser;
  }
}
