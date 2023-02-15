import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero?: Hero;
  public image: string;
  public showComics: boolean = false;
  public showSeries: boolean = false;


  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {

  }

  ngOnInit(): void {

    //el + delante de la variable, la convierte en numerica
    this.showComics = false;
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroeById(id).subscribe((hero: Hero) => {
      this.selectedHero = hero;
      this.image = this.selectedHero.thumbnail.path + "." + this.selectedHero.thumbnail.extension
      console.log(this.image)

    });


  }
  public showComic(): void {
    this.showComics = !this.showComics;
    this.showSeries = false;
  }
  public showSerie(): void {
    this.showSeries = !this.showSeries;
    this.showComics = false;
  }

  public irPatras(): void {
    this.location.back();
  }


}
