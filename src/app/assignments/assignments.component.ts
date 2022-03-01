import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  // pour afficher ou non le formulaire
  formVisible = false;

  // Pour envoie au composant de detail
  assignmentSelectionne?:Assignment;

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


  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;

    // pour cacher la vue de details
    this.assignmentSelectionne = undefined;
  }

  onDeleteAssignment(assignment:Assignment) {
    const pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    
    // pour cacher la vue de details
    this.assignmentSelectionne = undefined;

  }

  onNouvelAssignment(assignment:Assignment) {
    this.assignments.push(assignment);
    this.formVisible = false;
  }
}
