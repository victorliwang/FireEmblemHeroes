import { Component } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { NavController } from 'ionic-angular';

import { Ally } from '../../models/ally';

import { AllySearchService } from '../../providers/ally-search-service'

@Component({
  selector: 'ally-search',
  templateUrl: './ally-search.html'
})

export class AllySearchComponent {
  selectedAlly: Ally;
  allies: Observable<Ally[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private allySearchService: AllySearchService,
    public navCtrl: NavController) { }

  search(text: string): void {
    this.searchTerms.next(text);
  }

  ngOnInit(): void {
    this.allies = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.allySearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Ally[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Ally[]>([]);
      });
  }

  selectAlly(ally: Ally) {
    this.selectedAlly = ally;
    this.searchTerms.next(ally.name);
  }
}
