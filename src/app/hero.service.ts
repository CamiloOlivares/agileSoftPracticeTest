import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable,of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'http://157.245.138.232:9091/api/v1/test/superheroes';
  private heroUrl = 'http://157.245.138.232:9091/api/v1/test/superheroes/';

  getHeroes(vuela:string):Observable<Hero[]>{
    return this.http.get(this.heroesUrl+vuela).pipe(map(result=>result['data']));
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroUrl+id).pipe(map(result=>result['data']));
  }

  constructor(
    private http:HttpClient,
    private messageService:MessageService
    ) { }


    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
}
