'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./models/product')
const app = express()
const port = process.env.PORT || 3001
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
	res.send(200, { products: [] })
})
app.get('/api/product/:productId', (req, res) => {
	let productId = req.params.productId
	Product.findById(productId,(err, product)=>{
		if(err) return res.status(500).send({ message: `Error al realizar la pentición: ${err}` })
		if(!product) return res.status(404).send({message: `El producto noe existe`})

		res.status(200).send({product})
	})
})

app.post('/api/product', (req, res) => {
	console.log('post /api/product')
	console.log('req.boy')
	let product = new Product()
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.description = req.body.description

	product.save((err, productStored) => {
		if (err) res.status(500).send({ message: `error al salvar en la base de datos ${description}` })

		res.status(200).send({ product: productStored })
	})
})

app.put('/api/product/:productId', (req, res) => { })

app.delete('/api/product/:productdId', (req, res) => { })


mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
	if (err) {
		return console.log('error al concectar en la base de datos:')
	}
	console.log('Conexión a labase de tatos establecida')


	app.listen(port, () => {
		console.log(`express en localhost:${port}`)
	})
})
