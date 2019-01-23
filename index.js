const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const registration = require('./Registration');

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/registration",registration);

app.listen(3000, () => {
    console.log("Started");
});