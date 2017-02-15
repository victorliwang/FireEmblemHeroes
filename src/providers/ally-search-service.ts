import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Ally }   from '../models/ally';
import { ALLIES }  from '../app/ally-list';

@Injectable()
export class AllySearchService {

  allies: Ally[];
  constructor() { }

  search(term: string): Observable<Ally[]> {
    this.allies = [];
    return Observable.create(observer => {
      for (let ally of ALLIES) {
        if (ally['name'].toUpperCase().startsWith(term.toUpperCase())) {
          this.allies.push(ally);
        }
      }
      observer.next(this.allies);
      observer.complete();
    });
  }

  // search(text: string): Observable<Ally[]> {
  //   console.log(name);
  //   console.log("in search of all-search-service");
  //   console.log(ALLIES);
  //   return ALLIES['name'].filter
  //   return ALLIES['name'].filter(startsWithFilter.bind(text, value));
  // }
  //
  // startsWithFilter(text: string, value: any): boolean{
  //   return(value.startsWith(text));
  // }

}
