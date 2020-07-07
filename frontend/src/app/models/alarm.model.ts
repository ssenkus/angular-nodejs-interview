export class AlarmModel implements IAlarmModel {
  _id: string = null;
  id: number = null;
  name: string = null;
  coinId: number = null;
  thresholdDirection: string = null;
  thresholdPriceUsd: number = null;
  alarmData: {
    coinId: null
  }

  constructor(obj: any) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}

interface IAlarmModel {
  _id: string;
  id: number;
  name: string;
  coinId: number,
  thresholdDirection: string;
  thresholdPriceUsd: number;
  alarmData: {
    coinId: number
  }
}
