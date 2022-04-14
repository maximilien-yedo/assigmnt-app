import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Première application angular sur heroku';

  constructor(
    private router:Router,
    private assignmentsService:AssignmentsService) {}


  peuplerBD() {
    this.assignmentsService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("TOUS LES AJOUTS ONT ETE REALISES");
      // on peut alors afficher la liste
      this.router.navigate(["/home"]);
    })
  }
}
