const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TemperatureSchema = new Schema({
	temperature:{type: Number},
	time: {type: Number},
	date: {type: Number},
})


const Temperature = mongoose.model("Temperature",TemperatureSchema);

module.exports = Temperature;