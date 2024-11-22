import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
})
export class MainNavigationComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
