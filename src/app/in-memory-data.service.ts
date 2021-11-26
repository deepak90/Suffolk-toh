import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Green Signature',      cost: 5000000, area: 25000 },
      { id: 12, name: 'One Copley',           cost: 6800000, area: 27000 },
      { id: 13, name: 'Grand Place',          cost: 4000000, area: 20000 },
      { id: 14, name: 'Celeritas',            cost: 3981000, area: 12000 },
      { id: 15, name: 'Boston Hospital',      cost: 5000000, area: 25000 },
      { id: 16, name: 'Vibe Pharmaceuticals', cost: 5100000, area: 25000 },
      { id: 17, name: 'Century Tower',        cost: 5000000, area: 25000 },
      { id: 18, name: 'Seaport Commons',      cost: 5000000, area: 25000 },
      { id: 19, name: 'Big U Dining Hall',    cost: 5000000, area: 25000 },
      { id: 20, name: 'Welsley Center',       cost: 5000000, area: 25000 }
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
