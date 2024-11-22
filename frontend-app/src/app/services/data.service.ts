import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../model/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserData(): Observable<Array<IUser>> {
    // return USER_DATA;
    return this.http.get<IUser[]>(
      `https://nov-24-ng-default-rtdb.firebaseio.com/userdata.json?auth=${this.authService.getToken()}`
    );
  }
}
