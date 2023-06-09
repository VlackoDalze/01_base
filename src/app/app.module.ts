import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from "./contador_component/contador.module";
import { HeroesModule } from './heroes_component/heroes.module';
import { DragonBallZModule } from "./dragon-ball-z/dragon-ball-z.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    DragonBallZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
