import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dragon_ball_z.interface";

@Injectable()
export class DragonBallZService {

    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 15000 }, { nombre: 'Vegeta', poder: 8500 }
    ];

    //Las [] indica que es un arreglo y los ... indica que es u operador spread
    get personajes():Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log("DragonBallZService");
    }

    //Métodos

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}