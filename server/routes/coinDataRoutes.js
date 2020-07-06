const coinDataRepo = require('../dataAccess/repos/coinDataRepository');

exports.configure = (app) => {

    app.get('/api/coins', getCoinData);

};


function getCoinData(req, res, done) {
    console.log('GET COIN DATA route');
    coinDataRepo.getCoinData((err, coinsData) => {
        console.log('getCoinData', err, coinsData);
        res.json(coinsData);
    });

}
