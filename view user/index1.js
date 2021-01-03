var express = require('express');
var app = express();
var port = 3000;
const shortid = require('shortid');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ users: [], })
  .write()

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', function(request,response){
	response.render('index', {
		name:"aaa"
	});
});

app.get('/users', function(request,response){
	response.render('users/index1',{
		users : db.get('users').value()
	});
})

app.get('/users/create', function(request,response){
	response.render('users/create')
})
app.get('/users/:id', function(request,response){
	var id = request.params.id;
	var user = db.get('users')
  					.find({ id: id })
  					.value();
  	response.render('users/view', {
  		user: user
  	});
})
app.post('/users/create', function(request,response){
	request.body.id = shortid.generate();
	db.get('users').push(request.body).write();
	response.redirect('/users')
})
app.get('/users/search', function(request,response){
	var q = request.query.q;
	var match = db.get('users').value().filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	response.render('users/index1',{
		users:  match,
		q: q
	});
});

app.listen(port, function(){
	console.log("hello world!!!");