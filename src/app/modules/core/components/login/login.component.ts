import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../../models/classes/user";
import {AuthService} from "../../../../services/auth-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private router: Router, private authService: AuthService) {
    this.user = new  User();
  }

  ngOnInit() {
    this.getUserData();
  }
  login(): void {
    AuthService.login(this.user);
    this.router.navigate(['/store']);
  }
  getUserData(): void {
    this.authService.loadUserDataFromJson().subscribe((res)=> {
      console.log(res);
    });
  }
}
