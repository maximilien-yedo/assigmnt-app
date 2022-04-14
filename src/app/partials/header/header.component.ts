import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logIn: any;

  constructor(
    private authService:AuthService,
    private router:Router,
    private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((bool : boolean)=> {
      this.logIn = bool;
    })
  }

  peuplerBD() {
    this.assignmentsService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("TOUS LES AJOUTS ONT ETE REALISES");
      // on peut alors afficher la liste
      this.router.navigate(["/home"]);
    })
  }
  logout(){
    this.authService.logout()
  }

}


