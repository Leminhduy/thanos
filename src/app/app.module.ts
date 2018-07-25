import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {LayoutsModule} from './components/common/layouts/layouts.module';
import {RouterModule} from '@angular/router';
import {AppviewsModule} from './views/appviews/appviews.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    AppviewsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
