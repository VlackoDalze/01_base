import { Component } from '@angular/core';
import { Personaje } from "../interfaces/dragon_ball_z.interface";
import { DragonBallZService } from '../services/dragon-ball-z.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //Creo un objeto de tipo Personaje
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor() {
  
  }

}
