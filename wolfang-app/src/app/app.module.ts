import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import { APP_ROUTING } from './app.routes';

//servicios
import { HttpClientModule } from "@angular/common/http";

import { HeroesService } from './services/heroes.service';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ]
  ,
  bootstrap: [AppComponent],

})
export class AppModule { }
