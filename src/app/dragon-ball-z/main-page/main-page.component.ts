import { Component } from '@angular/core';
import { Personaje } from "../interfaces/dragon_ball_z.interface";

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

  personajes : Personaje[] = [
    {nombre: 'Goku', poder: 15000},{nombre: 'Vegeta', poder: 8500}
  ];

  addNewPersonaje(){
    this.personajes.push(this.nuevo);
  }

}
