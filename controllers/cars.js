const User = require('../models/user');
const Car = require('../models/car');
const Joi = require('joi');

module.exports = {
	index: async (req, res, next) => {
		const cars = await Car.find({});
		res.status(200).json(cars);
	},

	newCar: async (req, res, next) => {
		const {sellerId} = req.value.body;
		const seller = await User.findById(sellerId);
		const newCar = req.value.body;
		newCar.seller = seller;
		const car = new Car(newCar);
		
		await car.save();

		seller.cars.push(car);
		await seller.save();

		res.status(201).json(car);
	},

	getCar: async (req, res, next) => {
		const {carId} = req.value.params;
		const car = await Car.findById(carId);

		res.status(200).json(car);
	},

	replaceCar: async (req, res, next) => {
		const {carId} = req.value.params;
		const newCar = req.value.body;

		const car = await Car.findByIdAndUpdate(carId, newCar);

		res.status(200).json(car);
	},

	updateCar: async (req, res, next) => {
		const {carId} = req.value.params;
		const newCar = req.value.body;

		const car = await Car.findByIdAndUpdate(carId, newCar);

		res.status(200).json(car);
	},

	deleteCar :async (req, res, next) => {
		const {carId} = req.value.params;
		const car = await Car.findById(carId);

		if(!car)
			return res.status(404).json({error: "car doesnt exist"});

		const sellerId = car.seller;
		const seller = await User.findById(sellerId);

		await car.remove();

		seller.cars.pull(car);
		await seller.save();

		res.status(200).json(car);
	}
}