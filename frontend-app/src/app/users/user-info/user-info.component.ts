import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  @Input()
  user: any;

  @Output() onChildEvent = new EventEmitter();

  onKeyUp(value: string) {
    console.log('test', value);
    this.onChildEvent.emit(value);
  }
}
