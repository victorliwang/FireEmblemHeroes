import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddAllyPage } from '../add-ally/add-ally';

import { Ally } from '../../models/ally';
import { AllyService } from '../../providers/ally-service';
// import { AlliesList, ALLIES } from '../../app/allies-list';

@Component({
  selector: 'page-allies',
  templateUrl: 'allies.html'
})
export class AlliesPage {

  allies: Ally[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public allyService: AllyService,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.getAllies();
  }

  getAllies(): void {
    this.allyService.getAllies().then((data) => {
      this.allies = data;
    })
  }

  allySelected(ally: Ally): void {
    console.log("clicked: " + ally.name);
  }

  addAllyPage(): void {
    let addAllyModal = this.modalCtrl.create(AddAllyPage);

    addAllyModal.onDidDismiss(ally => {
      if (ally) {
        this.allies.push(ally);
        this.allyService.createAlly(ally);
      }
    });

    addAllyModal.present();
  }

  deleteAlly(ally) {
    let index = this.allies.indexOf(ally);
    if (index > -1) {
      this.allies.splice(index, 1);
    }
    this.allyService.deleteAlly(ally._id);
  }

}
