import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamationMark,
  ]);
  cnfPassword = new FormControl('', this.passwordMismatch);

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      uname: this.username,
      pwd: this.password,
      cnfPassword: this.cnfPassword,
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registrationForm.value);
    this.authService.userSignUp(
      this.registrationForm.value.uname,
      this.registrationForm.value.pwd
    );
  }

  hasExclamationMark(control: AbstractControl): ValidationErrors | null {
    const position = control.value.indexOf('!');
    return position >= 0 ? null : { hasExclError: true };
  }

  passwordMismatch(control: AbstractControl) {
    if (control.root && control.root.value) {
      if (control.value === control.root.value.pwd) {
        return null;
      } else {
        return { passwordMismatch: true };
      }
    }
    return null;
  }
}
