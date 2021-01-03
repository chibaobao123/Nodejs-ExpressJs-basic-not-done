var express = require('express');
var db = require('../db.js');
var shortid = require('shortid');

module.exports = function(req,res,next){
	if (!req.signedCookies.sessionId) {
		var sessionId = shortid.generate();
		res.cookie('sessionId', sessionId, {
			signed: true
		});
		db.get('session').push({
			id: sessionId
		})
	}

	var productsInSession = db.get('session')
						  		.find({ id: sessionId })
						  		.get('cart')
						  		.value()
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	
	if (productsInSession) {
		var totalProducts = productsInSession.reduce(reducer);
		
		res.render('products/index',{
			values: totalProducts
		});	
		return;
	}
	
	next();
}