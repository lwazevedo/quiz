const dbQuestions = require('../config/dbQuestions');

let questions = {};


questions.list = function(req, res) {
	
	for(let item in dbQuestions.questions){
		dbQuestions.questions[item].answers.sort(() => (Math.round(Math.random())-0.5));		
	}

	res.json(dbQuestions);
};

module.exports = questions;