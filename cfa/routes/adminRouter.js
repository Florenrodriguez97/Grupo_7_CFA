var express = require('express');
var router = express.Router();
const {actualizarProducto,borrarProducto,crearProducto,editarProducto,guardarProducto,listarProducto,index,categoria,buscar} = require('../controllers/adminController')

router.get('/',index);
router.get('/productos/categoria/:categ', categoria);
router.get('/productos/buscar', buscar);

router.get('/productos', listarProducto);

router.get('/productos/carga', crearProducto);
router.post('/productos/guardar', guardarProducto);//store

router.get('/productos/editar/:id', editarProducto);
router.put('/productos/actualizar/:id', actualizarProducto);

router.delete('/productos/borrar/:id',borrarProducto);

module.exports = router;