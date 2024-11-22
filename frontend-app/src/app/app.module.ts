import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { DirectiveDemoComponent } from './components/demo/directive-demo/directive-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/demo/auth/login/login.component';
import { RegistrationComponent } from './components/demo/auth/registration/registration.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './components/demo/observable-demo/observable-demo.component';
import { PostsComponent } from './components/demo/posts/posts.component';
import { APP_ROUTES } from './app.routes';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';

@NgModule({
  declarations: [
    // Component, directives, Pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImageComponent,
    LifeCycleComponent,
    DirectiveDemoComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    RegistrationComponent,
    ObservableDemoComponent,
    PostsComponent,
    MainNavigationComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [DataService], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
