import { firestore } from 'firebase/app';

export interface FirebaseTime extends firestore.FieldValue {
  toDate(): Date;
}

export interface Message {
  userId: string;
  text: string;
  imageURL: string;
  createdAt: FirebaseTime;
}
