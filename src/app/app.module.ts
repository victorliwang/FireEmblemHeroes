import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule }    from '@angular/http';
import { MyApp } from './app.component';
import { AlliesPage } from '../pages/allies/allies';
import { TeamsPage } from '../pages/teams/teams';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddAllyPage } from '../pages/add-ally/add-ally';
import { AllySearchComponent } from '../components/ally-search/ally-search';
import { AllyService } from '../providers/ally-service';
import { AllySearchService } from '../providers/ally-search-service';

@NgModule({
  declarations: [
    MyApp,
    AlliesPage,
    TeamsPage,
    HomePage,
    TabsPage,
    AddAllyPage,
    AllySearchComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AllyService, AllySearchService]
})
export class AppModule {}
