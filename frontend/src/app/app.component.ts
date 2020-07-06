import {Component, OnInit} from '@angular/core';
import {CoinDataService} from "./services/coinData.service";
import {CoinDataModel} from "./models/coinData.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private coinDataService: CoinDataService) {
  }

  ngOnInit(): void {
    this.coinDataService.getCoinData()
      .subscribe((coinsData: CoinDataModel[]) => {
        console.log('COINS data', coinsData);
      });
  }
}
