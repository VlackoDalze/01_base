//Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './main-page/personajes/personajes.component';
import { AgregarComponent } from './main-page/agregar/agregar.component';
import { DragonBallZService } from './services/dragon-ball-z.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers:[
    DragonBallZService
  ]
})
export class DragonBallZModule { }
