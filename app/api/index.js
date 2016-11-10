const questions = require('../../questions.json');

var api = {};

api.lista = function(req, res) {
    res.json(questions);
};

module.exports = api;