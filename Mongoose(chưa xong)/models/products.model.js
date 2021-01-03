const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
 	name : String,
	image : String,
	decription : String,
});
const Products = mongoose.model('Products', productsSchema, "products");

module.exports = Products;