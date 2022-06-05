import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-currentporj',
  templateUrl: './currentporj.component.html',
  styleUrls: ['./currentporj.component.css']
})
export class CurrentporjComponent implements OnInit {
  currentProjects
  constructor(public s : FrontService) {
    console.log("la liste des projets ",this.currentProjects)
   }

  ngOnInit(): void {
    this.getCurrentProjects()
  }
  getCurrentProjects(){
    this.s.getProjects()
      .subscribe(
        (next) => {                           //next() callback
          console.log('response received' , next)
          this.currentProjects = next; 
          //console.log("services list from mongo is " , this.serviceslist);
          
        },
  )}
}
