const _ = require('lodash');

const coinDataRepo = require('../dataAccess/repos/coinDataRepository');
const alarmRepo = require('../dataAccess/repos/alarmRepository');
const smsService = require('../services/smsService');

const jobName = 'Check Alarm Job';
let agendaInstance = null;

exports.register = (agenda) => {
    agendaInstance = agenda;

    agendaInstance.define(jobName, () => {
        console.log(`'${jobName}' executed at ${new Date()}`);

        coinDataRepo.getCoinData((err, coinsData) => {
            alarmRepo.getAlarms((err, alarms) => {
                console.log('ALARMS', alarms, coinsData);
                alarms.forEach((alarm) => {

                    let latestCoinData = _.find(coinsData, {id: alarm.alarmData.coinId});
                    // console.log('latestCoinData', latestCoinData);
                    if (latestCoinData && alarm.isTriggered(latestCoinData)) {
                        let message = `* ALARM * ${alarm.alarmData.name}: $${latestCoinData.quote.USD.price} is ${ alarm.alarmData.thresholdDirection} threshold $${alarm.alarmData.thresholdPriceUsd}`;

                        smsService.sendSms(message, () => {
                            console.log(message);
                        });
                    }
                });
            });
        });
    });
};

exports.setSchedule = (timeInterval) => {
    agendaInstance.every(timeInterval, jobName);
};
