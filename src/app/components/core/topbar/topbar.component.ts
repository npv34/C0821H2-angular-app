import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  userLogin: any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
  }

  logout() {
    localStorage.removeItem('userLogin')
    this.router.navigate(['login'])
  }

}
