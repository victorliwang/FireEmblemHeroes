import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AlliesPage } from '../allies/allies';
import { TeamsPage } from '../teams/teams';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AlliesPage;
  // tab3Root: any = TeamsPage;

  //for easier devlopment switch the tabs(default is tab1Root)

  constructor() {

  }
}
