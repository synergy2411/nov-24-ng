import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css'],
})
export class DirectiveDemoComponent implements OnInit {
  dynamicStyles = {
    border: '2px red solid',
    padding: '24px',
    color: 'green',
    backgroundColor: '#444',
  };

  dynamicClasses = { 'my-border': true, 'my-feature': false };

  isAdmin = false;

  friends = ['Monica', 'Joey', 'Rachel', 'Chandler', 'Ross'];

  tab = 1;

  onToggleClasses() {
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
    this.dynamicClasses['my-feature'] = !this.dynamicClasses['my-feature'];
  }

  constructor() {}

  ngOnInit(): void {}

  onChangeTheme() {
    this.dynamicStyles.backgroundColor = '#fff';
    this.dynamicStyles.color = '#333';
  }
  onRestoreTheme() {
    this.dynamicStyles.backgroundColor = '#333';
    this.dynamicStyles.color = '#fff';
  }
}
