const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BPSchema = new Schema({
	min:{type: Number},
	max: {type: Number},
	time: {type: Number},
	date: {type: Number},
})


const BP = mongoose.model("Bp", BPSchema);

module.exports = BP;