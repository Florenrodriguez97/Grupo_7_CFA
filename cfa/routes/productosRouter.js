var express = require('express');
var router = express.Router();
const productosController =require('../controllers/productosController')

/* GET home page. */
router.get('/carga', productosController.carga);
router.get('/carrito', productosController.carrito);
router.get('/detalle', productosController.detalle);
module.exports = router;