import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../_common/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  userChecked: boolean;

  constructor(private db: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.isUserLoggedIn();
  }

  private isUserLoggedIn() {
    this.authService.isAlreadyLoggedIn().subscribe((user) => {
      this.currentUser = (user) ? this.getCurrentUser(user) : null;
      this.userChecked = true;
    });
  }

  login() {
    this.authService.loginByGoogle().then((credentials) => {
      this.currentUser = this.getCurrentUser(credentials.user);
    });
  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
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
