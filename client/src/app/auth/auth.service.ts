import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  authToken: String = '';
  user: Object = {};

  constructor(private _httpClient: HttpClient) { }

  onRegisterUser(user){
    const url = '/regadmin';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(url,user,{headers}).map((res)=> res)
  }

  onLoginUser(user){
    const url = '/logadmin';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(url,user,{headers}).map((res)=> res)
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getToken() {
    if(localStorage.getItem('id_token')){
      return localStorage.getItem('id_token');
    } else return;
  }

  getUser() {
    if(localStorage.getItem('user')){
      return JSON.parse(localStorage.getItem('user'));
    } else return;
  }

}
