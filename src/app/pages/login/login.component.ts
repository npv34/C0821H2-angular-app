import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin?: FormGroup;
  errLogin: any;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    let data = this.formLogin?.value;
    if (this.authService.checkAccount(data)) {
      this.router.navigate(['admin/dashboard'])
    } else {
        this.errLogin = {
          status: 'error',
          content: 'Account not exits',
          classElement: 'alert alert-danger'
        }
    }
  }

}
