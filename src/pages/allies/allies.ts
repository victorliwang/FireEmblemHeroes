import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ally } from '../../models/ally';
import { ALLIES } from '../../app/allies-list';

@Component({
  selector: 'page-allies',
  templateUrl: 'allies.html'
})
export class AlliesPage {

  allies: Ally[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlliesPage');
  }

  getAllies(): void {
    this.allies = ALLIES;
  }

  ngOnInit(): void {
    this.getAllies();
  }

  allySelected(ally: Ally) {
    console.log("clicked: " + ally.name);
  }

}
