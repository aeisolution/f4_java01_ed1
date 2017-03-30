// WebServer con Nodejs

var http = require('http');

var server = http.createServer(function(req, res){
    console.log("ricevuta richiesta");
});

server.listen(8080,function(){
    console.log("Avviato web server");
});
