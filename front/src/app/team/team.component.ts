import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(public appOnlyService:FrontService) { }
  team = []
  ngOnInit(): void {
    this.getTeam()
  }
  getTeam(){
    return this.appOnlyService.getTeamMembers().subscribe(
      (next)=>{
          this.team = next
          console.log("team  " , next);
          
      }
    )
  }

}
