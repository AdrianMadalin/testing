import {Component, OnInit} from '@angular/core';
import {JwtHelper} from "../services/jwtHelper.service";
import {AuthService} from "../services/auth.service";
import * as $ from "jquery";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isValidToken: Boolean = false;
  token: String = '';
  pathToImage: String = '';

  constructor(private _jwtHelper: JwtHelper,
              private _authService: AuthService) {
  }

  ngOnInit() {
    this.pathToImage = '../../assets/images/carousel/';
    // this.token = this._authService.getToken();
    // this.token.length <= 0 ? this.isValidToken = true : this.isValidToken = false;
  }

}
