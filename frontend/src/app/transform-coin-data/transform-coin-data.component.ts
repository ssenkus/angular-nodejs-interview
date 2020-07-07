import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transform-coin-data',
  templateUrl: './transform-coin-data.component.html',
  styleUrls: ['./transform-coin-data.component.scss']
})
export class TransformCoinDataComponent implements OnInit {

  coinData = [{
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "slug": "bitcoin",
    "num_market_pairs": 8306,
    "date_added": "2013-04-28T00:00:00.000Z",
    "tags": ["mineable", "state-channels", "sha-256", "privacy", "pow", "store-of-value"],
    "max_supply": 21000000,
    "circulating_supply": 18425550,
    "total_supply": 18425550,
    "platform": null,
    "cmc_rank": 1,
    "last_updated": "2020-07-07T03:56:11.000Z",
    "quote": {
      "USD": {
        "price": 9310.53642782,
        "volume_24h": 18386604086.6321,
        "percent_change_1h": 0.385502,
        "percent_change_24h": 2.43826,
        "percent_change_7d": 1.59718,
        "market_cap": 171551754477.6188,
        "last_updated": "2020-07-07T03:56:11.000Z"
      }
    }
  }, {
    "id": 1027,
    "name": "Ethereum",
    "symbol": "ETH",
    "slug": "ethereum",
    "num_market_pairs": 5041,
    "date_added": "2015-08-07T00:00:00.000Z",
    "tags": ["crowdfunding", "pow", "medium-of-exchange", "mineable", "smart-contracts", "ethash"],
    "max_supply": null,
    "circulating_supply": 111653568.874,
    "total_supply": 111653568.874,
    "platform": null,
    "cmc_rank": 2,
    "last_updated": "2020-07-07T03:56:28.000Z",
    "quote": {
      "USD": {
        "price": 239.573368232,
        "volume_24h": 9236969681.81317,
        "percent_change_1h": 0.182331,
        "percent_change_24h": 5.138,
        "percent_change_7d": 5.12787,
        "market_cap": 26749221570.267776,
        "last_updated": "2020-07-07T03:56:28.000Z"
      }
    }
  }, {
    "id": 825,
    "name": "Tether",
    "symbol": "USDT",
    "slug": "tether",
    "num_market_pairs": 5395,
    "date_added": "2015-02-25T00:00:00.000Z",
    "tags": ["store-of-value", "stablecoin-asset-backed", "payments"],
    "max_supply": null,
    "circulating_supply": 9187991662.60765,
    "total_supply": 9479177441.5431,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
    },
    "cmc_rank": 3,
    "last_updated": "2020-07-07T03:56:37.000Z",
    "quote": {
      "USD": {
        "price": 1.00034204605,
        "volume_24h": 29292135295.4837,
        "percent_change_1h": 0.150449,
        "percent_change_24h": 0.0258202,
        "percent_change_7d": -0.144634,
        "market_cap": 9191134378.86328,
        "last_updated": "2020-07-07T03:56:37.000Z"
      }
    }
  }];

  output = null;

  constructor() {
  }

  ngOnInit(): void {
    this.output = this.coinData;
  }

  simplify() {
    this.output = this.coinData.map((coin) => {
      const { id, name, symbol, quote: {USD: { price}}} = coin;
      return {
        id,
        name,
        symbol,
        price
      };
    })
  }

}
