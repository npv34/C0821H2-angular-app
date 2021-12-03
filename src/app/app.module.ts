import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MessageComponent } from './components/share/message/message.component';
import { MasterComponent } from './components/master/master.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { TopbarComponent } from './components/core/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {UsersModule} from "./components/users/users.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    MasterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
