import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dragon_ball_z.interface';

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

  @Output() onAddPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregarPersonaje(): void {
    //Si al formulario les faltan datos no añadirá un datos a la lista
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder == 0) {
      return;
    }

    //Emite el objeto del tipo Personaje
    this.onAddPersonaje.emit(this.nuevo);

    //Reinicio el formulario
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
