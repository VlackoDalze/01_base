import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-hero.component.html'
})
export class ListHero {

  heroes: String[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  hero_name: String = '';
  deletedHero: String = '';
  mostrado:boolean = false;

  deleteHero(): void {
    this.deletedHero = this.heroes.pop() || '';
  }
  addHero(heroName: String): void {
    this.heroes.push(heroName);
  }
}
