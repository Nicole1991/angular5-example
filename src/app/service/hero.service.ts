import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessages('HeroService: fetched heroes');
    return of(HEROES);
  }
}
