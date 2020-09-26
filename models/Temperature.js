const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TemperatureSchema = new Schema({
	temperature:{type: Number},
	date: {type: Number, default: Date.now},
})


const Temperature = mongoose.model("Temperature",TemperatureSchema);

module.exports = Temperature;
