import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
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

  constructor() { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }
}
