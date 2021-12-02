import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {MasterComponent} from "./components/master/master.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {AuthGuardGuard} from "./auth-guard.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'users/add',
        component: UserAddComponent
      },
    ],
    canActivate: [AuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
