import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { displayComic } from '../displayComic';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-display-comic',
  templateUrl: './display-comic.component.html',
  styleUrls: ['./display-comic.component.scss']
})
export class DisplayComicComponent {
  public comic?: displayComic;
  public comicId: number;
  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService,) {

  }
  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getComic(+this.route.snapshot.paramMap.get('comicId')).subscribe((comic: displayComic) => this.comic = comic);

  }
  public irPatras(): void {
    this.location.back();
  }
}
