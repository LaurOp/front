import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditGameComponent } from './add-edit-game/add-edit-game.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HoverBDirective} from "../../hover-b.directive";



@NgModule({
  declarations: [
    AddEditGameComponent,
    HoverBDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    AddEditGameComponent
  ],
  exports: [
    HoverBDirective
  ]
})
export class SharedModule { }
