import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UserListComponent} from "./user-list/user-list.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  }
]

@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent,
    UserAddComponent
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UsersModule { }
