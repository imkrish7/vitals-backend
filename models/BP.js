const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BPSchema = new Schema({
	min:{type: Number},
	max: {type: Number},
	date: {type: Number, default: Date.now()},
})


const BP = mongoose.model("Bp", BPSchema);

module.exports = BP;
