import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    //el shift puede devolver un string o un undefined, pero el tipo string no permite undefined
    //por eso se pone el or, para cuando sea undefined mande una cadena vacia.
     this.heroeBorrado = this.heroes.shift() || '';
  }
}
