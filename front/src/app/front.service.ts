import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { activity } from './models/activity';
import { Project } from './models/Project';
@Injectable({
  providedIn: 'root',
})
export class FrontService {
  navbarItems: string[] = ['SERVICES', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT'];
  APIendpoint = 'http://localhost:3000/';
  errorMessage: any;
  loading: boolean;
   optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'mon-entete-personnalise':'maValeur'
    })
  };
  getServices(): Observable<any> {
    return this.http.get(this.APIendpoint + 'act/fetch').
    pipe(
      tap((result) => console.log("Résultat de la requête : ",result)),
    );
  }
  ourservicesList: activity[] = [
    new activity(
      'Building',
      'Construction of new modern buildings and renewal of existing building for office and residential use',
      'fa-shopping-cart'
    ),
    //'fas fa-shopping-cart fa-stack-1x fa-inverse'),
    new activity(
      'Bridges',
      'Construction of all types of bridges, underpasses and overpasses',
      'fa-laptop'
    ),
    //'fas fa-laptop fa-stack-1x fa-inverse'),
    new activity(
      'Roads',
      'New Roads Construction including farm track, single & dual Roadways, Motorways, Highways and Urban Roads, existing Roads reinforcement &rehabilitation',
      'fa-lock'
    ),
    //'fas fa-lock fa-stack-1x fa-inverse'),
    new activity(
      'Earthworks',
      'Excavation, embankment and cuttings works, levelling and compacting any type of soil',
      'fa-lock'
    ),
    //'fas fa-lock fa-stack-1x fa-inverse'),
  ];
  public currentPorjectsList: Project[] = [
    new Project(
      1,
      'current project1',
      'TunisAir',
      'building',
      new Date(2020, 8, 6),
      new Date(2022, 8, 9),
      '',
      '1.jpg'
    ),
    new Project(
      2,
      'current project2',
      'TunisAir',
      'building',
      new Date(2021, 8, 12),
      new Date(2024, 4, 16),
      '',
      '2.jpeg'
    ),
    new Project(
      3,
      'current project3',
      'TunisAir',
      'building',
      new Date(2022, 1, 29),
      new Date(2026, 7, 19),
      '',
      '3.jpg'
    ),
  ];
  getProjects() : Observable<any> {
    return this.http.get(this.APIendpoint + 'proj/fetch').
    pipe(
      tap((result) => console.log("Résultat de la requéte projet courant  : ",result)),
    );
  }

  getTeamMembers() : Observable<any> {
    return this.http.get(this.APIendpoint + 'team/fetch').
    pipe(
      tap((result) => console.log("Résultat de la requéte team  : ",result)),
    );
  }
 
  realizedProjectsList: Project[] = [
    new Project(
      1,
      'realized project1',
      'TunisAir',
      'building',
      new Date(2019, 10, 5),
      new Date(2021, 1, 6),
      'some details about this project,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis',
      '1.png'
    ),
    new Project(
      2,
      'realized project2',
      'TunisAir',
      'building',
      new Date(2018, 4, 23),
      new Date(2020, 8, 16),
      'some details about this project,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis',
      '2.png'
    ),
    new Project(
      3,
      'realized project3',
      'TunisAir',
      'building',
      new Date(2017, 10, 6),
      new Date(2020, 10, 26),
      'some details about this project,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis',
      '3.jpg'
    ),
  ];
  constructor(private http: HttpClient) {}
}
