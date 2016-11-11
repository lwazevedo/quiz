const http = require('http');
const app = require('./app/config/express');
    

http.createServer(app).listen(3000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

