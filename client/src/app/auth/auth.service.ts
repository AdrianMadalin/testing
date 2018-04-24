import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  onRegisterUser(user){
    const url = '/regadmin';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(url,user,{headers}).map((res)=> res)
  }

}
