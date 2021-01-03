var express = require('express');
var app = express();
var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

var users = [
			{id : 1, name:'Bao'},
			{id : 2, name:'Anh'}
		]

app.get('/', function(request,response){
	response.render('index', {
		name:"aaa"
	});
});

app.get('/users', function(request,response){
	response.render('users/index1',{
		users : users
	});
})
app.get('/users/search', function(request,response){
	var q = request.query.q;
	var match = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	response.render('users/index1',{
		users:  match,
		q: q
	});
});

app.listen(port, function(){
	console.log("hello world!!!");
});