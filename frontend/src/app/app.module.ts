import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CoinDataService} from "./services/coinData.service";
import {CoinTableComponent} from './coin-table/coin-table.component';
import {AlarmsService} from "./services/alarms.service";


@NgModule({
  declarations: [
    AppComponent,
    CoinTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    CoinDataService,
    AlarmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
