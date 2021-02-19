var express = require('express');
var router = express.Router();

const {check, body} = require('express-validator');

const {login,procesoLogin,procesoRegistro,registro} = require('../controllers/usersController');



/* GET home page. */

// login y register
router.get ('/registro', registro);
router.post ('/registro',[
    check ('email')
    .notEmpty().withMessage('El email es requerido'),
    check ('pass')
    .isLength({min:8, max:12}).withMessage('La contraseña debe tener entre un minimo de 8 y 12 caracteres')
    
], procesoRegistro);

router.post('/registro', procesoRegistro);
router.get('/login', login);
router.post('/login', procesoLogin);

module.exports = router;