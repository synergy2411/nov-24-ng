import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    this.authService.userSignIn(
      loginForm.value.email,
      loginForm.value.password
    );
    debugger;
    console.log(loginForm);
  }
}
