import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlarmModel } from '../models/alarm.model'


@Injectable()
export class AlarmsService {

  private readonly URLS = {
    ALARMS_REST_ENDPOINT: '/api/alarm'
  };

  _alarms: AlarmModel[];

  constructor(private http: HttpClient) {
  }

  public getAlarms(): Observable<AlarmModel[]> {
    return this.http.get(`${'http://localhost:3080'}${this.URLS.ALARMS_REST_ENDPOINT}`)
      .pipe(map((alarms: any) => {
        this._alarms = alarms;
        return this._alarms;
      }));
  }

  public createAlarm(alarmData): Observable<any> {
    return this.http.post(`${'http://localhost:3080'}${this.URLS.ALARMS_REST_ENDPOINT}`, { alarmData})
      .pipe(map((data) => {
        console.log('CREATE ALARM DATA', data);
      }));
  }

  // public updateAlarm(): Observable<any> {
  //   return this.http.put(`${'http://localhost:3080'}${this.URLS.ALARMS_REST_ENDPOINT}`, { alarmData})
  //     .pipe(map((data) => {
  //       console.log('CREATE ALARM DATA', data);
  //     }));
  // }

  public deleteAlarm(alarmId): Observable<any> {
    return this.http.delete(`${'http://localhost:3080'}${this.URLS.ALARMS_REST_ENDPOINT}/${alarmId}`)
      .pipe(map((data) => {
        console.log('DELETE ALARM DATA', data);
      }));
  }
}
