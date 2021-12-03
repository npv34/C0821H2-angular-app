import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAll().subscribe(response => {
      if (response.status == 'success') {
        console.log(response)
        this.users = response.data;
      } else  {
        alert('error databases');
      }
    })
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(response => {
      if (response.status == 'success') {
        alert(response.message);
        this.getAllUser();
      } else  {
        alert('error databases');
      }
    })
  }



}
