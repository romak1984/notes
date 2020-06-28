import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!JSON.parse(localStorage.getItem('notes[login]'));
  }

  logout() {
    localStorage.setItem('notes[login]', JSON.stringify(false));
    this.router.navigate(['login']);
  }

  setUser() {
    localStorage.setItem('notes[login]', JSON.stringify(true));
  }
}
