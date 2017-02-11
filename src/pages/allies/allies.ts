import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddAllyPage } from '../add-ally/add-ally';

import { Ally } from '../../models/ally';
import { ALLIES } from '../../app/allies-list';
// import { AlliesList, ALLIES } from '../../app/allies-list';

@Component({
  selector: 'page-allies',
  templateUrl: 'allies.html'
})
export class AlliesPage {

  allies: Ally[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    // private alliesList: AlliesList
  ) { }

  ngOnInit(): void {
    this.getAllies();
  }

  getAllies(): void {
    // this.allies = this.alliesList.allies;
    this.allies = ALLIES;
  }

  allySelected(ally: Ally): void {
    console.log("clicked: " + ally.name);
  }

  addAllyPage(): void {
    console.log("addAllyPage() called in allies.ts");
    let addAllyModal = this.modalCtrl.create(AddAllyPage);
    addAllyModal.present();
    // console.log("back in allies.ts");
  }

  // ionViewWillEnter() {
  //   console.log("ionViewWillEnter of allies.ts");
  //   console.log('name', this.navParams);
  // }

}
