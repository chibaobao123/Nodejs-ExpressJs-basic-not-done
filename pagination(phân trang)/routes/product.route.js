var express = require('express');
var products = require('../controller/product.controller.js')
var router = express.Router();

router.get('/',products.index)

router.get('/search',products.search)

module.exports = router;