import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { user } from '../../shared/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new user ();
  constructor(
    private authService : AuthService,
    private router : Router
  ) { }


  ngOnInit(): void {
  }

  onSubmit():void{
    this.authService.addUser(this.user);
    this.router.navigate(["login"]);

  }

}
