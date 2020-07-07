import {Component, Input, OnInit} from '@angular/core';
import {CoinDataModel} from "../models/coinData.model";
import {AlarmModel} from "../models/alarm.model";
import {AlarmsService} from "../services/alarms.service";

@Component({
  selector: 'app-coin-table-row-alarm-form',
  templateUrl: './coin-table-row-alarm-form.component.html',
  styleUrls: ['./coin-table-row-alarm-form.component.scss']
})
export class CoinTableRowAlarmFormComponent implements OnInit {
  @Input('coin') coin;

  constructor(private alarmsService: AlarmsService) {
  }

  ngOnInit(): void {
    console.log(this.coin);
  }

  setAlarm(coin: CoinDataModel): void {
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
      }, () => {
        console.error('error creating alarm!');
      })
  }

}
