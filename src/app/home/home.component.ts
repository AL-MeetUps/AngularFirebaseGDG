import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../_common/auth.service';
import { User } from '../_common/user';
import { Message } from '../_common/message';

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
      if (this.currentUser) {
        this.getMessages();
      }
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  private getMessages() {
    const a = this.db.collection<Message>('chat', ref => ref.orderBy('createdAt')).valueChanges().subscribe((messages) => {
      this.messages = messages;
      // this.db.collection('chat').add(<Message>{
      //   text: 'Waya Waya',
      //   imageURL: this.currentUser.photoURL,
      //   userId: this.currentUser.uid,
      //   createdAt: firebase.firestore.FieldValue.serverTimestamp()
      // });
      // a.unsubscribe();
    });
  }

  isMine(message: Message) {
    return message.userId === this.currentUser.uid;
  }

  login() {
    this.authService.loginByGoogle();
  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
  }

}
