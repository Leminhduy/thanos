import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {StarterComponent} from './starter/starter.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    StarterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    StarterComponent,
    LoginComponent
  ],
})

export class AppviewsModule {
}
