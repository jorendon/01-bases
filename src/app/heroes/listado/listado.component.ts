import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Goku', 'Spiderman', 'Iron Man', 'Hulk'];
  heroeBorrado: string='';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift()||'';
  }
}
