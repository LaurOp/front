import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./games/games.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games'
  },
  {
    path: 'games',
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
