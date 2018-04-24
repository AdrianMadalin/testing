import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _authService: AuthService,
              private _router: Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  onLoginSubmit(){
    const user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };

    this._authService.onLoginUser(user).subscribe((response)=>{
      console.log(response)
    })
  }

}
