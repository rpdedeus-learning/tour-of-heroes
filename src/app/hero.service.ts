import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heros';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
