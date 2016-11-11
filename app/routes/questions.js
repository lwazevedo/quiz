const questions = require('../controllers/questions');
const path = require('path');

module.exports = function (app) {
  app.route('/questions')
        .get(questions.list);

    // habilitando HTML5MODE
  app.all('/*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });
};
