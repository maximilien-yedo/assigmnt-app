import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

 // Champs du formulaire
 nomAssignment = "";
 dateDeRenduAssignment!:Date;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.nomAssignment);
    console.log(this.dateDeRenduAssignment);

    let newAssignment = new Assignment();
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateDeRenduAssignment;
    newAssignment.rendu = false;

    //this.assignments.push(newAssignment)
    // On doit envoyer le nouvel assignment au père pour que LUI, fasse l'ajout dans le
    // tableau qui est définit dans son fichier typescript

    this.nouvelAssignment.emit(newAssignment);
  }

}
