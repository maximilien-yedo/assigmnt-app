import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  // pour afficher ou non le formulaire
  formVisible = false;

  // Pour envoie au composant de detail
  assignmentSelectionne?: Assignment;

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

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;

    // pour cacher la vue de details
    this.assignmentSelectionne = undefined;
  }

  onDeleteAssignment(assignment: Assignment) {
    this.assignmentsService.deleteAssignment(assignment)
      .subscribe((message) => {
        console.log(message);

        // pour cacher la vue de details
        this.assignmentSelectionne = undefined;
      });
  }

  onNouvelAssignment(assignment: Assignment) {
    //this.assignments.push(assignment);
    this.assignmentsService.addAssignment(assignment).subscribe((message) => {
      console.log(message);

      // on ne cache le formulaire et on ne re-affiche la liste que quand les données sont réellement
      // ajoutées. Si passe par une requête ajax dans le cloud et une vraie BD, alors le seul endroit
      // qui permet d'être sûr que les données ont été réellement ajoutées, c'est ici, dans le subscribe
      this.formVisible = false;
    });
  }
}
