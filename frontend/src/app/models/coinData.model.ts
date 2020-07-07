export class CoinDataModel implements ICoinDataModel {
  id: number = null;
  name: string = null;
  quote: {
    USD: {
      price: number
    }
  }
  isExpanded: boolean = false;

  constructor(obj: any) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}

interface ICoinDataModel {
  id: number;
  name: string;
  quote: {
    USD: {
      price: number
    }
  };
  isExpanded: boolean;
}
