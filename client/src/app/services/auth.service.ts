import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {JwtHelper} from "./jwtHelper.service";


@Injectable()
export class AuthService {
  authToken: String = '';
  user: Object = {};
  uploadedImages: any;

  constructor(private _httpClient: HttpClient,
              private _jwtHelper: JwtHelper) {
  }

  onRegisterUser(user) {
    const url = '/regadmin';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(url, user, {headers}).map((res) => res)
  }

  onLoginUser(user) {
    const url = '/logadmin';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(url, user, {headers}).map((res) => res)
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getToken() {
    if (localStorage.getItem('id_token')) {
      return localStorage.getItem('id_token');
    }
  }

  isExpired() {
    if (this.getToken()) {
      console.log(this._jwtHelper.isTokenExpired(this.getToken().split(' ')[1]));
      return this._jwtHelper.isTokenExpired(this.getToken().split(' ')[1]);
    } else {
      return false
    }
  }

  getUser() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    } else return;
  }

  getUploadedImages() {
    const url = '/api-images/kungfu';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.get(url, {headers}).map((res) => res);
  }

  removeUploadedImage(id) {
    const url = '/api-images/kungfu';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.put(url, {_id: id}, {headers}).map((res) => res);
  }

}
