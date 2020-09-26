const express= require('express');
const route = express.Router();
// models

const BP = require('../models/BP');
const SPO = require('../models/Spo2');
const Temperature = require('../models/Temperature');


route.post('/bp', (req, res) => {
	console.log("---called--")
	return res.json({ success: true})
})

route.post('/temperature', (req, res) => {
	return res.json({ success: true})
})

route.post('/spo', (req, res) => {
	return res.json({ success: true})
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