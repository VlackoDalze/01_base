import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/dragon_ball_z.interface';
import { DragonBallZService } from '../../services/dragon-ball-z.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.DragonBallZService.personajes;
  }

  constructor(private DragonBallZService: DragonBallZService){
  }

}
