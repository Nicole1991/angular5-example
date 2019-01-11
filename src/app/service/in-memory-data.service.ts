import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Captain American'},
      { id: 2, name: 'Iron Man' },
      { id: 3, name: 'Thor' },
      { id: 4, name: 'Spider Man' },
      { id: 5, name: 'Doctor Strange' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Vision' },
      { id: 8, name: 'Hawkeye' },
      { id: 9, name: 'Black Widow' },
      { id: 10, name: 'Star Lord' },
      { id: 11, name: 'Winter Soldier' },
      { id: 13, name: 'Erik Killmonger' },
    ];
    return {heroes};
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
