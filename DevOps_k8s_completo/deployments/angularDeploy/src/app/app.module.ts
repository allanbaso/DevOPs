import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import { HeroesService } from './services/heroes.service';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { HeroeComponent } from './components/shared/heroe/heroe.component';
import { HeroeEncontradoComponent } from './components/shared/heroe-encontrado/heroe-encontrado.component';
import { HeroeTarjetaComponent } from './components/shared/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeEncontradoComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
