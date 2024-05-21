import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //localhost:4200/characters
    path: "characters",
    loadChildren: () => import('./pages/characters/characters.module')
    .then(m=>m.CharactersModule)
  },
  {
    //localhost:4200/planets
    path: "planets",
    loadChildren: () => import('./pages/planets/planets.module')
    .then(m=>m.PlanetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
