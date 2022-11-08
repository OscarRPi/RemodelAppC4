const express = require('express')
const cors = require('cors')
const json_products = require('../products.json')
const json_prooveedors = require('../proveedors.json')
const app = express()

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Conten-Type, Accept")
    next()
})


// routes 

app.get('/products',(req,res) => {
    res.send(json_products.products)
})

app.get('/products/slug/:slug',(req,res) => {
    const product = json_products.products.find((x) => x.slug === req.params.slug)
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({message: 'Producto no encontrado'})
    }
})

app.get('/proveedors',(req,res) => {
    res.send(json_prooveedors.proveedors)
})

app.get('/proveedors/slug/:slug',(req,res) => {
    const product = json_prooveedors.proveedors.find((x) => x.slug === req.params.slug)
    if(proveedor){
        res.send(proveedor)
    }
    else{
        res.status(404).send({message: 'Proveedor no encontrado'})
    }
})

// Configuraciones
app.set('port', process.env.PORT || 4500)

// Middlewares
app.use(cors())
app.use(express.json())

module.exports = app