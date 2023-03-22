import { CommonModule } from "@angular/common";
import { NgModule } from
    "@angular/core";

import { HeroComponent } from './hero/hero.component';
import { ListHero } from './listHero/list-hero.component';

@NgModule({
    declarations: [HeroComponent, ListHero],
    exports: [HeroComponent,ListHero],
    imports: [CommonModule]
})
export class HeroesModule {

}