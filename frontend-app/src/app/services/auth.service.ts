import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyD75Fhjkqhc8Usxi52CB2Mq6nVDMNDYva4',
  authDomain: 'nov-24-ng.firebaseapp.com',
});

const auth = getAuth(firebaseApp);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  userSignUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((err) => console.log(err));
  }
}
