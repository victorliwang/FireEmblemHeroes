import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import { Ally } from '../../models/ally';
import { ALLIES }  from '../../app/ally-list';

import { AllySearchService } from '../../providers/ally-search-service'

@Component({
  selector: 'page-add-ally',
  templateUrl: 'add-ally.html'
})
export class AddAllyPage {
  // allyForm: FormBuilder;
  selectedAlly: Ally;
  allies: Observable<Ally[]>;
  allyForm: FormGroup;
  allyData: {};
  private searchTerms = new Subject<string>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private allySearchService: AllySearchService) { }

  ngOnInit(): void {
    this.allyForm = this.formBuilder.group({
      ally: ['', Validators.required],
      rarity: ['', Validators.required],
      level: ['', Validators.required]
    });

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

  //add what the user inputs into the searchTerms Subject<string>
  search(text: string): void {
    this.searchTerms.next(text);
  }

  //set selectedAlly
  selectAlly(ally: Ally) {
    this.selectedAlly = ally;
    this.searchTerms.next(ally.name);
  }

  //send Ally back to allies page
  addAlly(): void {
    let fullAlly = {
      name: this.selectedAlly.name,
      rarity: this.allyForm.value['rarity'],
      level: this.allyForm.value['level'],
      attribute: this.selectedAlly.attribute,
      weapon: this.selectedAlly.weapon,
      movement: this.selectedAlly.movement
    };
    this.viewCtrl.dismiss(fullAlly);
  }

  //redirect to allies page
  cancel(): void {
    this.viewCtrl.dismiss();
  }

}
