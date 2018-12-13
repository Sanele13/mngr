var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request,result){
    result.sendFile('index.html');
});

http.listen(80,function(){
    console.log('app running!');
});