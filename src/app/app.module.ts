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
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    MasterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
