import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [];

  constructor(private loggingService:LoggingService, private http:HttpClient) {
    this.loggingService.setLoggingLevel(1);
  }

  url = "http://localhost:8010/api/assignments";

  getAssignments():Observable<Assignment[]> {
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.url);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    // on doit mettre | undefined si jamais l'élément n'existe pas
    //let a:Assignment|undefined = this.assignments.find(a => a.id === id);

    //return of(a);

    return this.http.get<Assignment>(this.url + "/" + id);
  }

  addAssignment(assignment:Assignment):Observable<any> {
    //this.assignments.push(assignment);

    this.loggingService.log(assignment, "ajouté");
    //return of("Assignment ajouté");
    return this.http.post<Assignment>(this.url, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    // pour le moment rien besoin de faire... ca marche tel quel
    // plus tard envoyer requête HTTP PUT sur web service pour update d'une base de données...

    this.loggingService.log(assignment, "modifié");

    return this.http.put<Assignment>(this.url, assignment);

    //return of("Assignment Modifié");
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
    /*
    const pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);*/

    this.loggingService.log(assignment, "supprimé");

    //return of("Assignment Supprimé");

    return this.http.delete(this.url + "/" + assignment._id);
  }
}
