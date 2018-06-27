// tslint:disable:max-line-length
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class MessagingService {

  private messaging = firebase.messaging();
  private currentToken: string;

  constructor(private http: HttpClient) { }

  getPermission() {
    this.messaging.requestPermission().then(() => {
      console.log('Permisos de Notificación aceptado.');
      this.messaging.getToken().then((token) => {
        console.log(token);
        this.currentToken = token;
      });
    });
  }

  sendNotification() {
    const request = {
      notification: {
        title: '¡Hola Notificaciones!',
        body: 'Esto es una notificación desde Firebase usando Angular',
        icon: '../../assets/logo.png',
        click_action: 'https://alejandrolora.com',
      },
      to: this.currentToken
    };
    return this.http.post('https://fcm.googleapis.com/fcm/send', request,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          // messaging-SERVER-key
          'Authorization': 'key=AAAABjlgVM4:APA91bFmk556D3KzSmP-Biwm2a0I99yPcVNz1WPclFJhlUnqesiajtF8z8wSX2ZfQSPxEKk-qJvI4tS_Y-GG59H14gEDrQOidget4Qk1ivSb2r4cKK0vMq24kfDGD0-heY6tihnIT-R6'
        }
      });
  }
}
