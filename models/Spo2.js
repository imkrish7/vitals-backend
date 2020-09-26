const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SPOSchema = new Schema({
	spo2:{type: Number},
	bpm: {type: Number},
	date: {type: Number, default: Date.now().toISOString()},
})


const SPO = mongoose.model("SPO", SPOSchema);

module.exports = SPO;
