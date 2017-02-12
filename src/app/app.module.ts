import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AlliesPage } from '../pages/allies/allies';
import { TeamsPage } from '../pages/teams/teams';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddAllyPage } from '../pages/add-ally/add-ally';
import { AllyService } from '../providers/ally-service';


@NgModule({
  declarations: [
    MyApp,
    AlliesPage,
    TeamsPage,
    HomePage,
    TabsPage,
    AddAllyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlliesPage,
    TeamsPage,
    HomePage,
    TabsPage,
    AddAllyPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AllyService]
})
export class AppModule {}
