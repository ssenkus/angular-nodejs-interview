const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;
const routes = require('./routes/index.js');
require('dotenv').config()

// const users = [];

app.use(bodyParser.json());

// app.get('/api/users', (req, res) => {
//     res.json(users);
// });
//
// app.post('/api/user', (req, res) => {
//     const user = req.body.user;
//     users.push(user);
//     res.json("user addedd");
// });

app.get('/', (req,res) => {
    res.send('App Works !!!!');


});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);

    routes.configure(app);

});
