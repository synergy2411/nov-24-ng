import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    company: 'Microsoft',
    isWorking: true,
    dob: new Date('Jan 12, 1965'),
    income: 50000,
    avatar: './assets/avatars/bill.jpg',
    votes: 120,
  };

  onMoreInfo(item: any) {
    alert(
      `Mr. ${item.lastName.toUpperCase()} is working with ${item.company}!`
    );
  }
}
