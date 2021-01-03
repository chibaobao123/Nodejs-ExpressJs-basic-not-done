var express = require('express');

var controller = require('../controller/user.controller.js')
var validation = require('../validation/user.validation');

var router = express.Router();

router.get('/',controller.index)
router.get('/create', controller.create)
router.get('/:id', controller.getUser)
router.post('/create',validation.validationUser,controller.postCreate)
router.get('/search', controller.search);

module.exports = router;