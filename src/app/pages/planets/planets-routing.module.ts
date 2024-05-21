import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { platformBrowser } from '@angular/platform-browser';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent
  },
  {
    path: ':id',
    component: PlanetsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
