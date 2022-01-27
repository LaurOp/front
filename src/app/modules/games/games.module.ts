import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';
import {MatButtonModule} from "@angular/material/button";
import { ChildComponent } from './child/child.component';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { ReviewsComponent } from './reviews/reviews.component';
import {MatListModule} from "@angular/material/list";
import {BulletsPipe} from "../../bullets.pipe";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    GamesComponent,
    ChildComponent,
    ReviewsComponent,
    BulletsPipe,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    SharedModule
  ],
  exports: [
    BulletsPipe
  ]
})
export class GamesModule { }
