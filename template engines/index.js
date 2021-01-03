var express = require('express');
var app = express();
var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(request,response){
	response.render('index', {
		name:"aaa"
	});
})

app.get('/user', function(request,response){
	response.render('users/index',{
		users : [
			{id : 1, name:'Bao'},
			{id : 2, name:'Anh'}
		]
	});
})

app.listen(port, function(){
	console.log("hello world!!!")
})