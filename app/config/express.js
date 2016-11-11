const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const questionRoute = require('../routes/questions');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

questionRoute(app);

module.exports = app;