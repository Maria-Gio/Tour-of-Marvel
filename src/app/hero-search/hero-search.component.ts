import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  public heroesFound$: Observable<Hero[]> = of([]);
  public searchTerm: Subject<string> = new Subject();
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroesFound$ = this.searchTerm.pipe(
      // completa el observable anterior y devuelve otro observable

      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        return this.heroService.searchHeroes(term);
      })
    )
    console.log(this.heroesFound$);
  }
  public search(value: string) {
    this.searchTerm.next(value);
  }
  // this.heroesFound$=this.heroService.searchHeroes(value)}
}
