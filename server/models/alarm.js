const _ = require('lodash');

class Alarm {

    constructor(data) {
        _.extend(this, data);
    }

    isTriggered(latestCoinData) {
        let isAlarmTriggered = false;
        switch (this.thresholdDirection) {
            case 'under':
                isAlarmTriggered = latestCoinData.quote.USD.price < this.thresholdPriceUsd;
                break;
            case 'over':
            default:
                isAlarmTriggered = latestCoinData.quote.USD.price > this.thresholdPriceUsd;
                break;
        }
        return isAlarmTriggered;
    }
}

module.exports = Alarm;
