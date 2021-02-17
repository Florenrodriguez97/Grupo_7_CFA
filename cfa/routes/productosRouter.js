var express = require('express');
var router = express.Router();

const {carga,carrito,categoria,detalle,editar,productos, buscar} = require('../controllers/productosController');

/* GET home page. */
router.get('/', productos);
router.get('/carga', carga);
router.get('/carrito', carrito);
router.get('/detalle', detalle);
router.get('/categoria/:categ', categoria);
router.get('/editar/:id', editar);
router.get('/buscar', buscar);


module.exports = router;