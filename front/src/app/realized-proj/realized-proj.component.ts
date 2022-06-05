import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-realized-proj',
  templateUrl: './realized-proj.component.html',
  styleUrls: ['./realized-proj.component.css'],
})
export class RealizedProjComponent implements OnInit {
  realizedProjects;
  constructor(public service: FrontService) {
    console.log(this.realizedProjects);
  }

  ngOnInit(): void {
    this.getRealizedProjects()
  }

  switchparity(proj) {
    //("timeline-inverted" : projIndex %2==1)? true:false) ;
    //console.log(projIndex);
    return {
      'timeline-inverted':
        this.realizedProjects.indexOf(proj) % 2 == 0 ? true : false,
    };
  }
  getRealizedProjects(){
    this.service.getProjects()
      .subscribe(
        (next) => {                           //next() callback
          console.log('response received realized project' , next)
          this.realizedProjects = next; 
          //console.log("services list from mongo is " , this.serviceslist);
          
        },
  )}
}
