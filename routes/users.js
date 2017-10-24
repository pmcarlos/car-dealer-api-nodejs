const express = require ('express');
//const router = express.Router();
var router = require('express-promise-router')();

const UsersController = require('../controllers/users');

router.route('/')
	.get(UsersController.index)
	.post(UsersController.newUser);

// /users/:id
router.route('/:userId').
	.get(UsersController.getUser);



module.exports = router;