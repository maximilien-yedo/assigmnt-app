import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Application de gestion des assignments !"
  assignments = [
    {
      nom:"Devoir angular pour Mr Buffa",
      dateDeRendu:"2022-03-01",
      rendu:false
    },
    {
      nom:"Devoir Oracle pour Mr Mopolo",
      dateDeRendu:"2022-01-10",
      rendu:true
    },
    {
      nom:"Devoir Grails pour Mr Galli",
      dateDeRendu:"2022-01-20",
      rendu:true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getColor(index:number) {
    return index%2 ? 'red' : 'green'
  }
}
