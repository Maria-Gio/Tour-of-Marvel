import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, filter, from } from 'rxjs';
import { Hero } from './hero';
import { displayComic } from './displayComic';
//Estudiar inyecciond de dependencias
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesURL: string = 'https://gateway.marvel.com/v1/public/characters';
  private serieURL: string='https://gateway.marvel.com/v1/public/series';
  private comicURL: string='https://gateway.marvel.com/v1/public/comics';
  private apikey: string = "23db868ceac7340cfcfd755f3427abaf";
  private hash: string = "6450c787b65bd9c579d2ea6baf9f5a1f";
  private powerfulKey: string = "?ts=hero&apikey=" + this.apikey + "&hash=" + this.hash;



  constructor(private http: HttpClient) {

  }

  public getHeroes(offset: number, limit: number): Observable<Hero[]> {

    const url = this.heroesURL + "?offset=" + offset * 20 + "&limit=" + limit + this.powerfulKey;
    return this.http.get<Hero[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results']))




  }
  //VIEJO GET HEROES
  public getHeroesRand(): Observable<Hero[]> {
    const rndNum = Math.floor(Math.random() * 1452) + 1;
    const url = this.heroesURL + "?offset=" + rndNum + "&limit=20" + this.powerfulKey;
    return this.http.get<Hero[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results']))
  }
  public getHeroeById(id: number): Observable<Hero> {
    const url = this.heroesURL + "/" + id + this.powerfulKey;

    return this.http.get<Hero>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results'][0]));
  }

  public getSerie(id: number): Observable<displayComic> {

    const url = this.serieURL+'/'+id+ this.powerfulKey;

    return this.http.get<displayComic[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results'][0]));

  }
  public getComic(id: number): Observable<displayComic> {

    const url = this.comicURL+'/'+id+ this.powerfulKey;


    return this.http.get<displayComic[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results'][0]));

  }
  public searchHeroes(text: string): Observable<Hero[]> {
    const url = this.heroesURL + "?" + "nameStartsWith=" + text + "&limit=100&ts=hero&apikey=" + this.apikey + "&hash=" + this.hash;


    if (!text.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results']))

  }




}

