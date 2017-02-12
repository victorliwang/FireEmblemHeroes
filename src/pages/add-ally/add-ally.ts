import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      level: [''],
      attribute: ['', Validators.required],
      weapon: ['', Validators.required],
      movement: ['', Validators.required],
    });
  }

  // addAlly(): Promise<string[]> {
  addAlly(): void {
    console.log("addAlly() in add-ally.ts");
    console.log(this.allyForm.value);
    this.viewCtrl.dismiss(this.allyForm.value);
  }

  //redirect to allies page
  cancel(): void {
    this.viewCtrl.dismiss();
  }

}
