import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./games/games.component";
import {ReviewsComponent} from "./reviews/reviews.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games'
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'reviews/:name',
    component: ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
