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


    this.coinDataService.getCoinData()
      .subscribe((coinsData: CoinDataModel[]) => {
        this.coinsData = coinsData;
        console.log('COINS', coinsData);
        this.alarmsService.getAlarms()
          .subscribe((alarms) => {
            console.log('ALARMS', alarms);
            this.alarms = alarms;
          });
      });
  }

  hasAlarm(coin: CoinDataModel) {
    const matches = this.alarms && this.alarms.filter((alarm: AlarmModel) => {
      return alarm.alarmData.coinId === coin.id
    })
    return !!matches && matches.length > 0;
  }

  deleteAlarm(coin: CoinDataModel) {
    const matches = this.alarms && this.alarms.filter((alarm: AlarmModel) => {
      return alarm.alarmData.coinId === coin.id;
    });

    const alarmId = matches[0]._id;

    this.alarmsService.deleteAlarm(alarmId)
      .subscribe(() => {
        this.alarms = this.alarms.filter(alarm => alarm._id !== alarmId);
      }, (err) => {
        console.error('Error while deleting alarm', err);
      })
  }

}
