import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => { this.heroes = heroes.slice(0, 10); });
  }
}
