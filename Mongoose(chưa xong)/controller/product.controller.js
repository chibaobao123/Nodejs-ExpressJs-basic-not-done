var express = require('express');
var Products = require('../models/products.model.js');

module.exports.index = async function(request,response){

	// công thức 
	// items in page n, with x per page
	// begin = (n-1) * x = n * x - x
	// end = (n-1) * x + x = n * x 
	// items = array.slice(begin,start)

	// var page = parseInt(request.query.page) || 1; // n
	// var perPage = 8; // x

	// var start = page*perPage - perPage;
	// var end = page*perPage;

	// response.render('products/index.pug',{
	// 	products : db.get('products').value().slice(start, end)
	// });
	var products = await Products.find()
		
	response.render('products/index.pug',{
			products : products
		});

}


module.exports.search = function(request,response){
	var q = request.query.q;
	var match = db.get('products').value().filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	response.render('products/index',{
		users:  match,
		q: q
	});
}