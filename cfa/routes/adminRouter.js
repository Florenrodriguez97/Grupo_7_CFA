var express = require('express');
var router = express.Router();
const path = require('path');
const {actualizarProducto,borrarProducto,crearProducto,editarProducto,guardarProducto,listarProducto,index,categoria,buscar,detalle} = require('../controllers/adminController')
const userCheck = require('../middlewares/adminCheck')
const upload = require('../utils/multerAdmin')

router.get('/',userCheck,index);




router.get('/productos/buscar',userCheck, buscar);
router.get('/productos/detalle/:id',userCheck, detalle);
router.get('/productos',userCheck, listarProducto);

router.get('/productos/carga',userCheck, crearProducto);
router.post('/productos/guardar', upload.any(), guardarProducto);//store

router.get('/productos/editar/:id',userCheck, editarProducto);
router.put('/productos/actualizar/:id', upload.any(), actualizarProducto);

router.delete('/productos/borrar/:id',borrarProducto);

module.exports = router;