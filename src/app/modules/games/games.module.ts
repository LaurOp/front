import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';
import {MatButtonModule} from "@angular/material/button";
import { ChildComponent } from './child/child.component';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    GamesComponent,
    ChildComponent
  ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatIconModule
    ]
})
export class GamesModule { }
