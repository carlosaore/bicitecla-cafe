const app = require('express')();
require('dotenv').config();

app.get('/', function(req, res) {
    console.log("access");
    res.status(200).send("API running")
});

module.exports = app;