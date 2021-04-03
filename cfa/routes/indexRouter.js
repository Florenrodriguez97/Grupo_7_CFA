var express = require('express');
var router = express.Router();
const {index, contacto, preguntas,armadoPc} =require('../controllers/indexController')

/* GET home page. */
router.get('/', index);

router.get('/contacto', contacto);

router.get('/preguntas', preguntas);

router.get('/armadoPc', armadoPc);





module.exports = router;
