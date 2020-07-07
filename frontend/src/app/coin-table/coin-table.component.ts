import {Component, OnInit} from '@angular/core';
import {CoinDataModel} from "../models/coinData.model";
import {CoinDataService} from "../services/coinData.service";
import {AlarmsService} from "../services/alarms.service";
import {AlarmModel} from "../models/alarm.model";

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss']
})
export class CoinTableComponent implements OnInit {

  coinsData: CoinDataModel[];
  alarms: AlarmModel[];

  constructor(private coinDataService: CoinDataService, private alarmsService: AlarmsService) {
  }

  ngOnInit(): void {

    this.alarmsService.getAlarms()
      .subscribe((alarms) => {
        console.log('ALARMS', alarms);
        this.alarms = alarms;
      });

    this.coinDataService.getCoinData()
      .subscribe((coinsData: CoinDataModel[]) => {
        this.coinsData = coinsData;
        console.log('COINS data', coinsData);
      });
  }

  hasAlarm(coin: CoinDataModel) {
    const matches = this.alarms && this.alarms.filter((alarm: AlarmModel) => {
      return alarm.alarmData.coinId === coin.id
    })
    return matches && matches.length > 0;
  }

  toggleAlarm(coin: CoinDataModel): void {
    console.log('coin', coin);
    const {name, id, quote: {USD: {price}}} = coin;
    this.alarmsService.createAlarm(new AlarmModel({
      name,
      coinId: id,
      thresholdPriceUsd: price,
      thresholdDirection: 'over'
    }))
      .subscribe((data) => {
        console.log('CREATE ALARM DATA res', data);
      })
  }

  deleteAlarm(coin: CoinDataModel) {
    const matches = this.alarms && this.alarms.filter((alarm: AlarmModel) => {
      return alarm.alarmData.coinId === coin.id
    })
    console.log('DELETE ALARM', matches);
    this.alarmsService.deleteAlarm(matches[0]._id).subscribe(() => {
      console.log('delete???');
    })
  }

}
