import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { compileClassDebugInfo } from '@angular/compiler';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//app-routing = //localhost:4200/characters
const routes: Routes = [
  {
    //localhost:4200/characters
    path: "",
    component: CharactersListComponent
  },
  {
    //localhost:4200/characters/1
    path: ":id",
    component: CharactersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
