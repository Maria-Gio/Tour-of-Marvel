import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { delay, filter, map } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  public heroes: Hero[] = [];
  p: number = 1;
  //Indica a Angular, que se requiere el uso de la instancia HeroService y , en el mismo paso, crea una propiedad privadad de nombre heroService para contener dicha instancia
  constructor(private heroService: HeroService) {


  }

  ngOnInit(): void {
    /**v1
     * //Obtener los heroes y los almacenamos en la variable heroes.
    this.heroes=this.heroService.getHeroes();*/
    // this.currentPage = this.heroService.getPage()
    /**
     * V2
     * .subscribe()  <---Es como el .then
     * .pipe()    <--- Deja realizar x acciones antes del subscribe, tal como un filtrado, un retraso en la aparicion o la recogida de fallos...
     * delay()  <--- Puedes poner una demora de descarga, 3000 son 3 segundos.
     */
    this.heroService.getHeroes().pipe(delay(30)).subscribe((heroes: Hero[]) => this.heroes = heroes);

  }
  // } public nextPage() {
  //   this.currentPage++;
  // }
  // public PrevPage() {
  //   this.currentPage++;
  // }
}
