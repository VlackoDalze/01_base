import { Component, Input} from '@angular/core';
import { Personaje } from '../../interfaces/dragon_ball_z.interface';
import { DragonBallZService } from '../../services/dragon-ball-z.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  //Creo un objeto de tipo Personaje
  @Input('personaje') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DragonBallZService: DragonBallZService){}

  addPersonaje(): void {
    //Si al formulario les faltan datos no añadirá un datos a la lista
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder == 0) {
      return;
    }

    this.DragonBallZService.agregarPersonaje(this.nuevo);

    //Reinicio el formulario
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
