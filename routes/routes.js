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
			const newBP = new BP({ min, max})
			console.log(newBP)
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
			console.log(newTemp)
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

route.get('/bp', (req, res) => {
	console.log("called=========")
	return res.json({ success: true})
})

route.get('/temperature', (req, res) => {
	return res.json({ success: true})
})

route.get('/spo', (req, res) => {
	return res.json({ success: true})
})





module.exports = route;
