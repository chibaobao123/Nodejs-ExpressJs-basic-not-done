var express = require('express');

var userRoute = require('./routes/user.route.js');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', userRoute)

app.get('/', function(request,response){
	response.render('index', {
		name:"aaa"
	});
});


app.listen(port, function(){
	console.log("hello world!!!");
});
