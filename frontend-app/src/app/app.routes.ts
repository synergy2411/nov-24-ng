import { Routes } from '@angular/router';
import { LoginComponent } from './components/demo/auth/login/login.component';
import { RegistrationComponent } from './components/demo/auth/registration/registration.component';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './components/demo/observable-demo/observable-demo.component';
import { UsersComponent } from './users/users.component';

// http://localhost:4200/login

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'pipes', component: PipeDemoComponent },
  { path: 'observable', component: ObservableDemoComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
