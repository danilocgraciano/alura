import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../user/user';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit() {
  }

  logout(event) {
    event.preventDefault();
    this.userService.logout();
    this.router.navigate(['']);

  }

}
