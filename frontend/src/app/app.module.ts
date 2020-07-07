import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CoinDataService} from "./services/coinData.service";
import {CoinTableComponent} from './coin-table/coin-table.component';
import {AlarmsService} from "./services/alarms.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import { CoinTableRowAlarmFormComponent } from './coin-table-row-alarm-form/coin-table-row-alarm-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinTableComponent,
    CoinTableRowAlarmFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    CoinDataService,
    AlarmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
