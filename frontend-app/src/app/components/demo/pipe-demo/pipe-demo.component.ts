import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  isLoading = false;

  promise = new Promise((resolve) => {
    this.isLoading = true;
    setTimeout(() => {
      resolve('SUCCESS');
      this.isLoading = false;
    }, 2000);
  });

  constructor() {}

  ngOnInit(): void {}
}
