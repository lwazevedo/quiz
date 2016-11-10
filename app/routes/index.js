var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/questions')
        .get(api.lista);
            
    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};