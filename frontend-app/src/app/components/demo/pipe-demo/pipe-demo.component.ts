import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  todoCollection = [
    { label: 'pot the plants', status: 'pending' },
    { label: 'buy new jeans', status: 'completed' },
    { label: 'go for shopping', status: 'pending' },
    { label: 'renew car insurance', status: 'completed' },
  ];

  filteredValue = '';

  testString = '9876543210';

  isLoading = false;

  pipeChaining = 'Hello world';

  promise = new Promise((resolve) => {
    this.isLoading = true;
    setTimeout(() => {
      resolve('SUCCESS');
      this.isLoading = false;
    }, 2000);
  });

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.todoCollection.push({ label: 'New Todo Item', status: 'pending' }); // Impure Change

    // this.todoCollection = [{}]    // Pure Change
  }
}
