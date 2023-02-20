import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { displayComic } from '../displayComic';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero?: Hero;
  public image: string;
  public showComics: boolean = false;
  public showComicsDisplay: boolean = false;
  public showSeries: boolean = false;
  public showSeriesDisplay: boolean = false;
  public displayComic: displayComic[] = [];


  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    //el + delante de la variable, la convierte en numerica
    this.showComics = false;
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroeById(id).subscribe((hero: Hero) => {
      this.selectedHero = hero;
      this.image = this.selectedHero.thumbnail.path + "." + this.selectedHero.thumbnail.extension

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

  public goToComic(item: string): void {
    this.router.navigate([this.selectedHero.id,'series', item.split('/').pop()])
  }
  public goToSerie(item: string): void {
    this.router.navigate([this.selectedHero.id,'comics', item.split('/').pop()])
  }

  public irPatras(): void {
    this.location.back();
  }


}
