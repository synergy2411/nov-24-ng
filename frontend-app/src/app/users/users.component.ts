import { Component, OnInit } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user!: IUser;

  constructor() {}

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  childValue = '';

  onMoreInfo(item: IUser) {
    alert(
      `Mr. ${item.lastName.toUpperCase()} is working with ${item.company}!`
    );
  }

  onChildInput(value: string) {
    this.childValue = value;
  }
}
