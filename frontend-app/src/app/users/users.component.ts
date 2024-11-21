import { Component, OnInit } from '@angular/core';
// import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // providers : [DataService]
})
export class UsersComponent implements OnInit {
  users!: IUser[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.dataService.getUserData().subscribe((data) => (this.users = data));
  }

  childValue = '';

  onMoreInfo(item: IUser) {
    alert(
      `Mr. ${item.lastName.toUpperCase()} is working with ${item.company}!`
    );
    debugger;
  }

  onChildInput(value: string) {
    this.childValue = value;
  }
}
