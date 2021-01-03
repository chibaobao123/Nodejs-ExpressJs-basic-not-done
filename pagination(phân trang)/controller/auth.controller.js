var express = require('express');
var md5 = require('md5');

var db = require('../db.js');

module.exports.login = function(req,res){
	res.render('auth/login');
};
module.exports.postLogin = function(req,res){
	var email = req.body.email;
	var password = req.body.password;
	var user = db.get('users')
  					.find({ email: email })
  					.value();
  	if(!user){
  		res.render('auth/login',{
  			errors: ['nguoi dung khong ton tai !!!'],
  			values:req.body
  		});
  		return;
  	}
  	var md5Password = md5(password)
  	if(user.password !== md5Password){
		res.render('auth/login',{
			errors: ['mat khau khong  dung !!!'],
			values:req.body
		});	
		return;	
	}
	res.cookie('userId', user.id, {
		signed: true
	});
	res.redirect('/users');
};