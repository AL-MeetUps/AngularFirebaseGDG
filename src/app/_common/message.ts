import * as firebase from 'firebase';

export interface Message {
  userId: string;
  text: string;
  imageURL: string;
  createdAt: firebase.firestore.FieldValue;
}
