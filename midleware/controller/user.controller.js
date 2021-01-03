var express = require('express');
var shortid = require('shortid');

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
	db.get('users').push(request.body).write();
	response.redirect('/users')
}
module.exports.getUser = function(request,response){
	var id = request.params.id;
	var user = db.get('users')
  					.find({ id: id })
  					.value();
  	response.render('users/view', {
  		user: user
  	});
}