import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoinDataModel} from "../models/coinData.model";


@Injectable()
export class CoinDataService {

  // private _issues: IssueMonitorItemModel[];
  private readonly URLS = {
    GET_COIN_DATA: '/api/coins/'
  };

  _coinsData: CoinDataModel[]
  // issueListUpdated = new Subject<IssueMonitorItemModel[]>();
  // customDataRangeParams: IssueMonitorRequest = null

  constructor(private http: HttpClient) {
  }

  public getCoinData(): Observable<CoinDataModel[]> {
    return this.http.get(`${'http://localhost:3080'}${this.URLS.GET_COIN_DATA}`)
      .pipe(map((coinsData: any) => {
        this._coinsData = coinsData;//searchResult.Result.map(item => new IssueMonitorItemModel(item));
        // this.issueListUpdated.next(this._issues);
        return this._coinsData;
      }));
  }
}
