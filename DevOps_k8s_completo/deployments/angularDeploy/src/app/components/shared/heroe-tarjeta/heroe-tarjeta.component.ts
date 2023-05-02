import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  @Input() heroe: any = {};
  @Input() i: any;
  @Output() seleccionado: EventEmitter<number>;
  constructor(private _router: Router) {
    this.seleccionado = new EventEmitter();
  }
  
  verHeroe() {
    // console.log(this.i);
    this._router.navigate(['/heroe',this.i]);
    // this.seleccionado.emit(this.i);
  }
}
