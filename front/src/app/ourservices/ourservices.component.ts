import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {
  serviceslist

  constructor(public serv: FrontService) {
    this.serviceslist = serv.ourservicesList
   }

  ngOnInit(): void {
    this.getServices()
  }

  getServices(){
    this.serv.getServices()
      .subscribe(
        (next) => {                           //next() callback
          console.log('response received')
          this.serviceslist = next; 
          console.log("services list from mongo is " , this.serviceslist);
          
        },
  )}

}
