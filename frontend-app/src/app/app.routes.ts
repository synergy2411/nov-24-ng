import { Routes } from '@angular/router';
import { LoginComponent } from './components/demo/auth/login/login.component';
import { RegistrationComponent } from './components/demo/auth/registration/registration.component';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './components/demo/observable-demo/observable-demo.component';
import { UsersComponent } from './users/users.component';
import { LoginGuard } from './services/guard/login.guard';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { IAmLazyComponent } from './modules/lazy/components/i-am-lazy/i-am-lazy.component';

// http://localhost:4200/login

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'pipes', component: PipeDemoComponent },
  { path: 'observable', component: ObservableDemoComponent },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: ':name/:productId/overview', component: OverviewComponent },
      { path: 'specification', component: SpecificationComponent },
    ],
  },
  {
    path: 'lazy',
    // component: IAmLazyComponent,
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [LoginGuard],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
