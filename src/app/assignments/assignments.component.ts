import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Application de gestion des assignments !';
  assignments: Assignment[] = [];

  constructor(private assignmentsService: AssignmentsService) {
    //console.log("dans le constructeur")
  }

  // appelé avant l'affichage
  ngOnInit(): void {
    //console.log("dans le ngInit")
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
      //console.log("Données arrivées");
    });

    //console.log("assignmentsService.getAssignments() appelé...");
  }

  getColor(index: number) {
    return index % 2 ? 'red' : 'green';
  }

}
