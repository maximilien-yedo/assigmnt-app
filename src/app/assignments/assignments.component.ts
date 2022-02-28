import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  // Champs du formulaire
  nomAssignment = "";
  dateDeRenduAssignment!:Date;

  titre = "Application de gestion des assignments !"
  assignments:Assignment[] = [
    {
      nom:"Devoir angular pour Mr Buffa",
      dateDeRendu: new Date("2022-03-01"),
      rendu:false
    },
    {
      nom:"Devoir Oracle pour Mr Mopolo",
      dateDeRendu: new Date("2022-01-10"),
      rendu:true
    },
    {
      nom:"Devoir Grails pour Mr Galli",
      dateDeRendu: new Date("2022-01-20"),
      rendu:true
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(index:number) {
    return index%2 ? 'red' : 'green'
  }

  onSubmit() {
    console.log(this.nomAssignment);
    console.log(this.dateDeRenduAssignment);

    let newAssignment = new Assignment();
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateDeRenduAssignment;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment)

  }
}
