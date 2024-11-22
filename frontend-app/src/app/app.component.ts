import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: []
})
export class AppComponent {
  title = 'frontend-app';

  toggle = true;

  constructor(private authServie: AuthService) {}

  isAuthenticated() {
    return this.authServie.isAuthenticated();
  }
}
