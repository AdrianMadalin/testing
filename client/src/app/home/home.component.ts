import { Component, OnInit } from '@angular/core';
import {JwtHelper} from "../auth/jwtHelper.service";
import {AuthService} from "../auth/auth.service";
import * as $ from "jquery";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isValidToken: Boolean = false;
  token: String = '';
  constructor(private _jwtHelper: JwtHelper,
              private _authService: AuthService) { }

  ngOnInit() {
    this.token = this._authService.getToken();
    this.token.length <= 0 ? this.isValidToken = true: this.isValidToken = false;
    console.log(this.isValidToken);
    console.log(this._jwtHelper.isTokenExpired(this.token.split(' ')[1]))
      $('#one').css('color','red');
  }


}
