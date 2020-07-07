const alarmRepo = require('../dataAccess/repos/alarmRepository');


exports.configure = (app) => {

    app.post('/api/alarm', createAlarm);
    app.get('/api/alarm', getAlarms);
    app.delete('/api/alarm/:alarmId', deleteAlarm)
};

function createAlarm(req, res, done) {
    const alarmData = req.body;

    alarmRepo.createAlarm(alarmData, (err, alarm) => {
        return res.json(alarm);
    });
}

function getAlarms(req, res, done) {

    alarmRepo.getAlarms((err, alarms) => {
        return res.json(alarms);
    });

}

function deleteAlarm(req, res, done) {
    console.log('delete req params', req.params);
    alarmRepo.deleteAlarm(req.params.alarmId, (err, result) => {
       return res.json()
    });
}
