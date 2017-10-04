const http = require('http');
const app = require('./app/config/express');
    
app.set('port', process.env.PORT || 3000)
http.createServer(app).listen(app.get('port'), function() {
    console.log('Quiz -- executando Servidor na porta: ' + this.address().port);
});

