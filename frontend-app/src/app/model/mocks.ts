import { IUser } from './user';

export const USER_DATA: Array<IUser> = [
  {
    firstName: 'bill',
    lastName: 'gates',
    company: 'Microsoft',
    isWorking: true,
    dob: new Date('Jan 12, 1965'),
    income: 50000,
    avatar: './assets/avatars/bill.jpg',
    votes: 120,
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    company: 'Apple',
    isWorking: false,
    dob: new Date('Dec 3, 1965'),
    income: 0,
    avatar: './assets/avatars/steve.jpeg',
    votes: 180,
  },
  {
    firstName: 'tim b.',
    lastName: 'lee',
    company: 'World Wide Web',
    isWorking: true,
    dob: new Date('Aug 23, 1965'),
    income: 30000,
    avatar: './assets/avatars/tim.jpeg',
    votes: 80,
  },
];
