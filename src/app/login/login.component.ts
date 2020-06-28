import { LoginService } from './../api/login.service';
import { Login } from './../model/login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = {userName: '', password: ''};

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  loginUser() {
    this.loginService.login(this.login);
  }

}
