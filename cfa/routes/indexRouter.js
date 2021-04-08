var express = require('express');
var router = express.Router();
const {index, contacto, preguntas,armadoPc,comboSeleccionado} =require('../controllers/indexController')

/* GET home page. */
router.get('/', index);

router.get('/contacto', contacto);

router.get('/preguntas', preguntas);

router.get('/armadoPc', armadoPc);

router.get ('/armadoPc/comboSeleccionado', comboSeleccionado)




module.exports = router;
