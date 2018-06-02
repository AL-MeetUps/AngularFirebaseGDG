import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../_common/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentUser: User;
  userSub: Subscription;
  userChecked: boolean;

  messages: Message[];

  constructor(
    private db: AngularFirestore,
    private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userChecked = true;
    });
    this.getMessages();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  private getMessages() {
    this.db.collection<Message>('chat', ref => ref.orderBy('createdAt')).valueChanges().subscribe((messages) => {
      this.messages = messages;
    });
  }

  login() {
    this.authService.loginByGoogle();
  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
  }

}
