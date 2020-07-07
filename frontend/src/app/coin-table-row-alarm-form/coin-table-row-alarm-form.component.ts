import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coin-table-row-alarm-form',
  templateUrl: './coin-table-row-alarm-form.component.html',
  styleUrls: ['./coin-table-row-alarm-form.component.scss']
})
export class CoinTableRowAlarmFormComponent implements OnInit {
  @Input('coin') coin;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.coin);
  }

}
