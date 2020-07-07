const rp = require('request-promise');

exports.getCoinData = (done) => {

    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
            'start': '1',
            'limit': '50',
            'convert': 'USD'
        },
        headers: {
            'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY
        },
        json: true,
        gzip: true
    };

    rp(requestOptions).then((response) => {
        done(null, response.data);
    }).catch((err) => {
        done(err, null);
    });
};
