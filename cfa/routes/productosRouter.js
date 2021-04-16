var express = require('express');
var router = express.Router();

const {carrito,categoria,detalle,productos, buscar, processCarrito,carritoDelete} = require('../controllers/productosController');
const productoCheck = require('../middlewares/productoCheck')
const userCheck = require('../middlewares/userCheck')

/* GET home page. */
router.get('/', productos);
router.get('/carrito', productoCheck, carrito);
router.post('/carrito/:id', userCheck, processCarrito);
router.delete('/carrito/delete/:idProd',carritoDelete);
router.get('/detalle/:id', detalle);
router.get('/buscar', buscar);
router.get('/:categ', categoria);


module.exports = router;