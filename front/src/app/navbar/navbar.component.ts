import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarItems : string[]
  constructor(service :FrontService) {
    this.navbarItems= service.navbarItems
   }

  ngOnInit(): void {
  }
  navigateToSection(section){
    window.location.hash = '';
    window.location.hash = section;
  }

}
