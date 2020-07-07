const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoClientWrapper = require('./dataAccess/mongoClientWrapper.js');
const routes = require('./routes/index.js');
const jobs = require('./jobs/jobs.js');

// Initialize config
require('dotenv').config();

const app = express();
const port = 3080;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    mongoClientWrapper.initialize(() => {

        routes.configure(app);
     //   jobs.start();
    });

    process.on('SIGINT', shutDown);
    process.on('SIGTERM', shutDown);
});

function shutDown() {
    console.log('\nShutting down!');

    jobs.stop(() => {

        mongoClientWrapper.dispose(() => {
            process.exit(0);
        });

    });

}
