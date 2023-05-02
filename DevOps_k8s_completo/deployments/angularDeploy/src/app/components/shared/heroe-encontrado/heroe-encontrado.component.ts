import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-encontrado',
  templateUrl: './heroe-encontrado.component.html'
})
export class HeroeEncontradoComponent {
  heroes: any[] = [];
  parametro: string ='';
  @Input() heroe: any = {};
  @Input() i: any;
  constructor(private _activatedRoute:ActivatedRoute, private _heroesservice:HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesservice.buscarHeroes(params['nombre'])
      this.parametro = params['nombre'];
      // for (let index = 0; index < this.heroes.length; index++) {
      //   console.log(this.heroes[index].id);
      // }
    });
  }

}
