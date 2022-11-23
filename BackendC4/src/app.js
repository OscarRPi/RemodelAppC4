const express = require('express')
const cors = require('cors')
const app = express()

const proveedorRouter = require('./routes/proveedorRoutes');
const productRouter = require('./routes/productRoutes');
//const userRouter = require('./routes/userRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes
app.use('/proveedors', proveedorRouter);
app.use('/products', productRouter);
//app.use('/users', userRouter);

// Configurations
app.set('port', process.env.PORT);

module.exports = app;

/*




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



module.exports = app


*/