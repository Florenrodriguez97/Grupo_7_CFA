var express = require('express');
var router = express.Router();

const {carrito,categoria,detalle,productos, buscar} = require('../controllers/productosController');
const productoCheck = require('../middlewares/productoCheck')

/* GET home page. */
router.get('/', productos);
router.get('/carrito', productoCheck, carrito);
router.get('/detalle/:id', detalle);
router.get('/categoria/:categ', categoria);
router.get('/buscar', buscar);



module.exports = router;