import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyD75Fhjkqhc8Usxi52CB2Mq6nVDMNDYva4',
  authDomain: 'nov-24-ng.firebaseapp.com',
});

const auth = getAuth(firebaseApp);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  constructor(private router: Router) {}

  userSignUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((err) => console.log(err));
  }

  userSignIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentails) => {
        userCredentails.user.getIdToken().then((token) => {
          console.log('TOKEN : ', token);
          this.token = token;
          localStorage.setItem('token', token);
          this.router.navigate(['/users']);
        });
      })
      .catch(console.error);
  }

  isAuthenticated() {
    return this.token !== null;
  }

  getToken() {
    return this.token;
  }

  onLogout() {
    signOut(auth)
      .then(() => {
        this.token = null;
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      })
      .catch(console.error);
  }
}
