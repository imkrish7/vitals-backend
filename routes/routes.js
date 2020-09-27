const express= require('express');
const route = express.Router();
// models

const BP = require('../models/BP');
const SPO = require('../models/Spo2');
const Temperature = require('../models/Temperature');


route.post('/bp', async (req, res) => {
	const min = req.body.min;
	const max = req.body.max;

	try {
			const newBP = new BP({ min, max })
			await newBP.save()
			return res.json({ success: true})
	} catch (e) {
			return res.status(500).json({success: false, error: "Internal server error"})
	}

})

route.post('/temperature', async (req, res) => {
	const temperature = req.body.temperature

	try {
			const newTemp = new Temperature({ temperature })
			await newTemp.save();
			return res.json({ success: true})
	} catch (e) {
		return res.status(500).json({ success: false, error: "Internal server error"})
	}

})

route.post('/spo', async(req, res) => {
	const spo2 = req.body.spo2;
	const bpm = req.body.bpm;

	try {
			const newSPO = new SPO({ spo2, bpm});
			console.log(SPO)
			await newSPO.save()
			return res.json({ success: true})
	} catch (e) {
		return res.status(500).json({ success: false, error: "Internal server error"})
	}
})

route.get('/bp', async (req, res) => {
	const date = req.query.date
	console.log(req.query)
	console.log(req.params)
	console.log(req.body)
	var start = new Date(date);
	start.setHours(0,0,0,0);

	var end = new Date(date);
	end.setHours(23,59,59,999);
	try {
		const data = await BP.find({date: { $gte: start, $lte: end}});
		return res.json({ success: true, data: data});
	} catch (e) {
		console.log(e)
		return res.status(500).json({ success: false, error: "Internal server error"})
	}
})

route.get('/temperature', async (req, res) => {
	const date = req.query.date

	var start = new Date(date);
	start.setHours(0,0,0,0);

	var end = new Date(date);
	end.setHours(23,59,59,999);
	try {
		const data = await Temperature.find({date: { $gte: start, $lte: end}});
		return res.json({ success: true,data: data});
	} catch (e) {
		console.log(e)
		return res.status(500).json({ success: false, error: "Internal server error"})
	}
})

route.get('/spo', async (req, res) => {
	const date = req.query.date

	var start = new Date(date);
	start.setHours(0,0,0,0);

	var end = new Date(date);
	end.setHours(23,59,59,999);
	try {
		const data = await SPO.find({date: { $gte: start, $lte: end}});
		return res.json({ success: true, data: data});
	} catch (e) {
		console.log(e)
		return res.status(500).json({ success: false, error: "Internal server error"})
	}
})





module.exports = route;
