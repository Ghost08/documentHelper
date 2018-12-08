import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData :any = {};
  errorData : any ={};

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    if (this.loginUserData.userName === "admin" && this.loginUserData.password === "admin") {
      localStorage.setItem("token", "abcdefghijklmn");
      this._router.navigate(["home"])
    }
  }
}

