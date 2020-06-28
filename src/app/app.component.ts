import { UserService } from './api/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public userService: UserService) {

  }

  logout() {
    this.userService.logout();
  }
}
