const express = require ('express');
//const router = express.Router();
var router = require('express-promise-router')();

const UsersController = require('../controllers/users');


router.route('/')
	.get(UsersController.index)
	.post(UsersController.newUser);

// /users/:id
router.route('/:userId')
	.get(UsersController.getUser)
	.put(UsersController.replaceUser)
	.patch(UsersController.updateUser);

router.route('/:userId/cars')
	.get(UsersController.getUserCars)
	.post(UsersController.addUserCar);

module.exports = router;