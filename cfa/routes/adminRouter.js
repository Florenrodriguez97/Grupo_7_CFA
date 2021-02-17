var express = require('express');
var router = express.Router();
const {actualizarProducto,borrarProducto,crearProducto,editarProducto,guardarProducto,listarProducto} = require('../controllers/adminController')

router.get('/productos', listarProducto);

router.get('/productos/carga', crearProducto);
router.post('/productos/guardar', guardarProducto);

router.get('/productos/editar/:id', editarProducto);
router.put('/productos/actualizar/:id', actualizarProducto);

router.delete('/productos/borrar/:id',borrarProducto);

module.exports = router;