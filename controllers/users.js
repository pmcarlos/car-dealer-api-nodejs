var User = require('../models/user');

module.exports = {
	// index: (req, res, next) => {
	// 	User.find({})
	// 		.then(users => {
	// 			res.status(200).json(users);
	// 		})
	// 		.catch(err => {
	// 			next(err)
	// 		});
	// },

	index: async (req, res, next) => {
		try {
			const users = await User.find({});
			res.status(200).json(users);
		} catch(err) {
			next(err);
		}
		
	},

		// newUser: (req, res, next) => {
	// 	const newUser = new User(req.body);
	// 	newUser.save()
	// 		.then(user => {
	// 			res.status(201).json(user);
	// 		})
	// 		.catch(err => {
	// 			next(err)
	// 		});
	// }

	newUser: async (req, res, next) => {
		try {
			const newUser = new User(req.body);
			const user = await newUser.save();
			res.status(201).json(user);
		} catch(err) {
			next(err);
		}
	}
};