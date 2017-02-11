import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ally } from '../../models/ally';

@Component({
  selector: 'page-add-ally',
  templateUrl: 'add-ally.html'
})
export class AddAllyPage {
  // allyForm: FormBuilder;
  allyForm: FormGroup;
  allyData: {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.allyForm = this.formBuilder.group({
      name: ['', Validators.required],
      rarity: ['', Validators.required],
      level: ['', Validators.required],
      attribute: ['', Validators.required],
      weapon: ['', Validators.required],
      movement: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAllyPage');
  }

  // addAlly(): Promise<string[]> {
  addAlly(): void {
    console.log("addAlly() in add-ally.ts");
    // console.log(this.allyForm.value);
    console.log(JSON.stringify(this.allyForm.value));
    this.allyData = JSON.stringify(this.allyForm.value);
    this.viewCtrl.dismiss(this.allyData);
  }

}
