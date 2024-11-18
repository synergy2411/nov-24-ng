import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Component, directives, Pipes
    AppComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
  ],
  providers: [], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
