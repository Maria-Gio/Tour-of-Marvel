import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, filter, from } from 'rxjs';
import { Hero } from './hero';
//Estudiar inyecciond de dependencias
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesURL: string = 'https://gateway.marvel.com/v1/public/characters';
  private apikey: string = "23db868ceac7340cfcfd755f3427abaf";
  private hash: string = "6450c787b65bd9c579d2ea6baf9f5a1f";


  //Para coger info entre componentes, se crea la variable
  //private variable :String;
  //Y e instanciamos el constructor en los componentes a usar.

  constructor(private http: HttpClient) {

  }
  //Hace una llamada a la api para devolver todos los heroes, como es una operacion asincrona, devuelve un Observavle

  public getHeroes(offset: number, limit: number): Observable<Hero[]> {

    const url = this.heroesURL + "?offset=" + offset * 20 + "&limit=" + limit + "&ts=hero&apikey=" + this.apikey + "&hash=" + this.hash;
    console.log(url);
    // return of(HEROES);
    return this.http.get<Hero[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results']))




  }
  //VIEJO GET HEROES
  public getHeroesRand(): Observable<Hero[]> {
    const rndNum = Math.floor(Math.random() * 1452) + 1;
    const url = this.heroesURL + "?offset=" + rndNum + "&limit=20" + "&ts=hero&apikey=" + this.apikey + "&hash=" + this.hash;
    console.log(url);
    // return of(HEROES);
    return this.http.get<Hero[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results']))
  }
  public getHeroeById(id: number): Observable<Hero> {
    //Este metodo find, busca el heroe el cual su id coincide con la id que mandamos
    const url = this.heroesURL + "/" + id + "?ts=hero&apikey=" + this.apikey + "&hash=" + this.hash;
    console.log(url);
    //find devuelve un objeto o null y filter un array.

    return this.http.get<Hero>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results'][0]));
  }

  public updateHero(hero: Hero): Observable<unknown> {
    return this.http.put<unknown>(`${this.heroesURL}/${hero.id}`, hero);
  }
  public searchHeroes(text: string): Observable<Hero[]> {
    // const url = this.heroesURL + "?" + "&ts=hero&apikey=" + this.apikey + "&hash=" + this.hash;
    const url = this.heroesURL + "?" +"nameStartsWith="+text+ "&limit=100&ts=hero&apikey=" + this.apikey + "&hash=" + this.hash;


    if (!text.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(url).pipe(catchError(e => {
      console.error(e);
      return [];
    }), map(result => result['data']['results']))

  }
  public getComics(url:string){

  }



}

