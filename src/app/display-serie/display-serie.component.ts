import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { displayComic } from '../displayComic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-serie',
  templateUrl: './display-serie.component.html',
  styleUrls: ['./display-serie.component.scss']
})
export class DisplaySerieComponent implements OnInit {
  public serie?: displayComic;
  public serieId: number;
  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService,) {

  }
  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.heroService.getSerie(+this.route.snapshot.paramMap.get('serieId')).subscribe((serie: displayComic) => this.serie = serie);

  }
  public irPatras(): void {
    this.location.back();
  }


}
