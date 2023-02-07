import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Shrek',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 2,
        name: 'Homer',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 3,
        name: 'Peter',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 4,
        name: 'Stan',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 5,
        name: 'Rick',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 6,
        name: 'Messi',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 7,
        name: 'Goku',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 8,
        name: 'Kaneki',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 9,
        name: 'Luffy',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }, {
        id: 11,
        name: 'Pepe the frog',
        superpowers: 'Pedarse',
        hasCape: false,
        height: 200
      }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
