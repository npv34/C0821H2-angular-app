import { Component, OnInit } from '@angular/core';
import {RoleService} from "../../../services/role.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {root} from "rxjs/internal-compatibility";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  roles: any[] = [];
  formAddUser?: FormGroup;
  rolesChecked: any[] = []
  constructor(private roleService: RoleService,
              private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getAllRole();
    this.formAddUser = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      role: ['']
    })

  }

  getAllRole() {
    this.roleService.getAll().subscribe(res => {
      this.roles = res;
    })
  }

  submit() {
    this.formAddUser?.patchValue({
      role: [this.rolesChecked]
    })
    let data = this.formAddUser?.value;
    this.userService.createUser(data).subscribe(res => {
      console.log(res)
    })
  }

  setRole(event: any) {
    this.rolesChecked.push(event.target.value);
  }

}
