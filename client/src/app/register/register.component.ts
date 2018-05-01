import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required]),
      'secret' : new FormControl(null, [Validators.required])
    })
  }

  onRegisterSubmit(){
    const user = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      secret: this.registerForm.value.secret
    };

    if(user.secret === 'qqq'){
      this._authService.onRegisterUser(user).subscribe((response) => {
        console.log(response)
        if(response['message'] === 'success') {
          this._router.navigate(['/logadmin']);
        }
      });
    } else {
      this._router.navigate(['/regadmin']);

    }
  }
}
