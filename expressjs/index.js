var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request,response){
	response.send('hello Chí Bảo Bảo');
})

app.get('/user', function(request,response){
	response.send('<h1>hello Chí Bảo Bảo</h1>');
})

app.listen(port, function(){
	console.log("hello world!!!")
})