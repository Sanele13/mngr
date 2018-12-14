var http = require('http');
var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, '../../angular/mngr-frontend/dist/mngr-frontend')));
app.get('/', function(request,result){
    //result.write(path.join(__dirname, '../../angular/mngr-frontend/dist'));
    //result.end();
    result.sendfile('index.html');
});

http.createServer(app).listen(80,function(){
    console.log('app running');
});