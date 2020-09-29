import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarComponent} from './dashboard/toolbar/toolbar.component';
import {SidemenuComponent} from './dashboard/sidemenu/sidemenu.component';
import {MaterialModule} from './utilModules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './dashboard/content/home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/content/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidemenuComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
