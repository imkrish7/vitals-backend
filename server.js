const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes/routes')
const app = express();
const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(config.mongo_uri[environment], { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error',()=>{
	console.log(`-------error-------`);
})

app.use('/vitals', routes);
app.get('/', (req, res) => {
	return res.json({success: true})	
})

app.listen( process.env.PORT || 3000, () => {
	console.log(`--------server is running on port--------`)
})