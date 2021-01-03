var express = require('express');
var app = express();
var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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

app.get('/users/create', function(request,response){
	response.render('users/create')
})
app.post('/users/create', function(request,response){
	users.push(request.body);
	response.redirect('/users')
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