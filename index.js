'use strict'

const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

 


mongoose.connect(config.db, (err, res) => {
	if (err) {
		return console.log('error al concectar en la base de datos:')
	}
	console.log('Conexión a la base de datos establecida')


	app.listen(config.port, () => {
		console.log(`express en localhost:${config.port}`)
	})
})
