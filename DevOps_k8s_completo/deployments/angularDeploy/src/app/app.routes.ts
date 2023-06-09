import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/shared/home/home.component";
import { AboutComponent } from "./components/shared/about/about.component";
import { HeroesComponent } from "./components/shared/heroes/heroes.component";
import { HeroeComponent } from "./components/shared/heroe/heroe.component";
import { HeroeEncontradoComponent } from "./components/shared/heroe-encontrado/heroe-encontrado.component";


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroeencontrado/:nombre', component: HeroeEncontradoComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);