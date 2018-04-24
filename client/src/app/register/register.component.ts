import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'userName' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required]),
      'secret' : new FormControl(null, [Validators.required])
    })
  }


  onRegisterSubmit(){
    const user = {
      userName: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      secret: this.registerForm.value.secret
    };

    if(user.secret === 'qqq'){
      this._authService.onRegisterUser(user).subscribe((data) => console.log(data));
    } else {
      console.log(`Wrong secret`);
    }
  }
}
