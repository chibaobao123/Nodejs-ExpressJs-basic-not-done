var express = require('express');
var cart = require('../controller/cart.controller.js')
var router = express.Router();

router.get('/addProduct/:productId',cart.addToCart)


module.exports = router;