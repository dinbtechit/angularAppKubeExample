import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './dashboard/content/home/home.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './dashboard/content/profile/profile.component';


const routes: Routes = [
  {path: '', redirectTo: 'app/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, data: {animationState: 'login'}},
  {
    path: 'app',
    component: DashboardComponent,
    data: {animationState: 'app'},
    children: [
      {path: 'home', component: HomeComponent, data: {animationState: 'home'}},
      {path: 'profile', component: ProfileComponent, data: {animationState: 'profile'}},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
