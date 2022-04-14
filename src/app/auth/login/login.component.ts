import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { loginUser } from '../../shared/login.model ';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser = new loginUser ();

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  login():void{
    this.authService.login(this.loginuser);

  }

}
