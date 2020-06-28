import { UserService } from './user.service';
import { Login } from './../model/login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router) { }

  login(loginData: Login) {
    this.http.get('assets/users.json').subscribe((users) => {
      console.log(users[loginData.userName]);
      console.log(loginData.password);

      if (users[loginData.userName] && users[loginData.userName] === loginData.password) {
        this.userService.setUser();
        this.router.navigate(['board']);
      }else {
        alert('Wrong credentials');
      }
    });
  }
}
