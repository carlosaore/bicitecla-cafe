const express = require('express')
const app = express()
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.status(200).send("API running")
});

app.post('/api', function(req, res) {
    console.log(req.body);
    res.status(200).json({msg:"success"});
});

module.exports = app;