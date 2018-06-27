import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { firestore } from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../_common/auth.service';
import { User } from '../_common/user';
import { Message } from '../_common/message';
import { MessagingService } from '../_common/messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  currentUser: User;
  userSub: Subscription;
  userChecked: boolean;

  messages: Message[];
  messagesSub: Subscription;
  messagesReady: boolean;

  @ViewChild('messagingArea') messagingArea: ElementRef;
  @ViewChildren('chats') chats: QueryList<any>;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private messagingService: MessagingService) { }

  ngOnInit() {
    this.userSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userChecked = true;
      if (this.currentUser) {
        this.getMessages();
        this.messagingService.getPermission();
      }
    });
  }

  ngAfterViewInit() {
    this.messagesSub = this.chats.changes.subscribe(() => this.scrollToBottom());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.messagesSub.unsubscribe();
  }

  private getMessages() {
    this.db.collection<Message>('chat', ref => ref.orderBy('createdAt')).valueChanges().subscribe((messages) => {
      this.messages = messages;
      this.messagesReady = true;
    });
  }

  createMessage(text: string) {
    this.db.collection('chat').add(<Message>{
      text,
      imageURL: this.currentUser.photoURL,
      userId: this.currentUser.uid,
      createdAt: firestore.FieldValue.serverTimestamp()
    });
  }

  sendNotification() {
    setTimeout(() => this.messagingService.sendNotification().subscribe(), 4000);
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

  private scrollToBottom() {
    this.messagingArea.nativeElement.scrollTop = this.messagingArea.nativeElement.scrollHeight;
  }

}
