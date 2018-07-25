import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import {BlankLayoutComponent} from './blank-layout/blank-layout.component';
import {BasicLayoutComponent} from './basic-layout/basic-layout.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    BlankLayoutComponent,
    BasicLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // BsDropdownModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: []
})
export class LayoutsModule {
}
