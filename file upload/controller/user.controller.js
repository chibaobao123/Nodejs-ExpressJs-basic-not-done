var express = require('express');
var shortid = require('shortid');
var multer  = require('multer');

var upload = multer({ dest: './public/uploads/' })
var db = require('../db.js');

module.exports.index = function(request,response){
	response.render('users/index1',{
		users : db.get('users').value()
	});
}
module.exports.search = function(request,response){
	var q = request.query.q;
	var match = db.get('users').value().filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	response.render('users/index1',{
		users:  match,
		q: q
	});
}
module.exports.create = function(request,response){
	response.render('users/create')
}
module.exports.postCreate = function(request,response){
	request.body.id = shortid.generate();
	request.body.avatar = request.file.path.split('\\').slice(1).join('/');
	//split('/') chia nhỏ từ phần '/' 
	// slice(1) lấy từ ptu 1 
	//join('/') bỏ '/' vào lại string
	console.log(request.body.avatar)
	db.get('users').push(request.body).write();
	response.redirect('/users')
}
module.exports.getUser = function(request,response){
	var id = request.params.id;
	var user = db.get('users')
  					.find({ id: id })
  					.value();
  	response.render('users/view.pug', {
  		user: user
  	});
}