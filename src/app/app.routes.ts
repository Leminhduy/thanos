import {Routes} from '@angular/router';
import {BasicLayoutComponent} from './components/common/layouts/basic-layout/basic-layout.component';
import {BlankLayoutComponent} from './components/common/layouts/blank-layout/blank-layout.component';
import {StarterComponent} from './views/appviews/starter/starter.component';
import {LoginComponent} from './views/appviews/login/login.component';


export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'starterview', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      // {path: 'dashboard1', component: Dashboard1Component}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
    ]
  },

  // Handle all other routes
  {path: '**', redirectTo: 'starterview'}
];
