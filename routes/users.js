const express = require ('express');
//const router = express.Router();
var router = require('express-promise-router')();

const UsersController = require('../controllers/users');

router.route('/')
	.get(UsersController.index)
	.post(UsersController.newUser);


module.exports = router;