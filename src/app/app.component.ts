import { Component } from '@angular/core';
import {AuthService} from './auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateHelperApp';
  isLoggedIn: any;

  constructor(private _authService : AuthService){
    this.isLoggedIn = this._authService.loggedIn;
  }

  logoutUser(){
    this._authService.logoutUser();
  }
}
