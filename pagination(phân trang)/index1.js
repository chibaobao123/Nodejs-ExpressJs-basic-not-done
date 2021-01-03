var express = require('express');

var userRoute = require('./routes/user.route.js');
var authRoute = require('./routes/auth.route.js');
var productRoute = require('./routes/product.route.js');

var requireAuth = require('./midleware/auth.midleware.js')
var cookieParser = require('cookie-parser')

var port = 3000;

var app = express();
app.use(cookieParser('baobaochi123'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing applicationtion/x-www-form-urlencoded

app.use('/products',productRoute);
app.use('/auth',authRoute);
app.use('/users',requireAuth.requireAuth,userRoute);


app.get('/', function(request,response){
	response.render('index', {
		name:"aaa"
	});
});


app.listen(port, function(){
	console.log("hello world!!!");
});
