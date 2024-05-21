import { Component } from '@angular/core';

import { PaginationPlanets } from './../planets';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.css'
})
export class PlanetsListComponent {

  paginationPlanets: PaginationPlanets | undefined;

//injeção de dependência
  constructor(private service: PlanetsService){

    //executa a consulta para o ENDPOINT de Planets
    this.service.getPlanets()
    .subscribe((dados: PaginationPlanets) => {
      this.paginationPlanets = dados;
    });

  }

}
