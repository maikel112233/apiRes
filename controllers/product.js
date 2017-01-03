'use strict'

const Product = require('../models/product')

function getProduct(req, res) {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar la pentición: ${err}` })
        if (!product) return res.status(404).send({ message: `El producto noe existe` })

        res.status(200).send({ product })
    })
}

function getProducts(req, res) {
    Product.find({}, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar la pentición: ${err}` })
        if (!product) return res.status(404).send({ message: `no existen productos` })
        res.send(200, { product })
    })
}

function saveProduct(req, res) {
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
}

function updateProduct(req,res) {
        let productId = req.params.productId
	let update = req.body

	Product.findByIdAndUpdate(productId,update,(err,productUpdated)=>{
		if (err) res.status(500).send({message:`error al actualizar el servidor: ${err}`})
		res.status(200).send({product: productUpdated})
	})
}

function delecteProduct(req, res) {
        let productId = req.params.productId
	Product.findById(productId, (err, product) => {
		if (err) res.status(500).send({ message: `Error al borrar producto: ${err}` })

		product.remove(err => {
			if (err) res.status(500).send({ message: `Error al borrar peticion: ${err}` })
			res.status(200).send({ message: 'elproducto asido eliminado' })
		})
	})
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    delecteProduct,
    saveProduct
}