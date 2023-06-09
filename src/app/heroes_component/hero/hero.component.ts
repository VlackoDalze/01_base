import { Component } from "@angular/core";

@Component({
    selector: "hero-app",
    templateUrl: './hero.component.html'
})
export class HeroComponent{

    nombre: string = "IronMan";
    edad: number = 45;

    getNombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${this.nombre } - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = "Spiderman";
    }

    cambiarEdad():void {
        this.edad = 25;
    }
}