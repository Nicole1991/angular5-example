import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../../hero';
import { MessageService } from '../message/message.service';
import { HEROES } from '../../mock-heroes';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService,
              private http: HttpClient) {
  }

  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.addMessages(message);
  }
}
