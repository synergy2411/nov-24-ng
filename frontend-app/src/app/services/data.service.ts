import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Injectable()
export class DataService {
  constructor() {}

  getUserData() {
    return USER_DATA;
  }
}
