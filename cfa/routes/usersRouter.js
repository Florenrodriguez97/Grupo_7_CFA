var express = require('express');
var router = express.Router();

const {check, body} = require('express-validator');

const {login,procesoLogin,procesoRegistro,registro} = require('../controllers/usersController');
const registroValidator= require('../validations/registroValidator');
const uploadImages=require('../middlewares/uploadImages');
/* GET home page. */

// login y register
router.get ('/registro', registro);
router.post ('/registro',[
    check ('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('El email no es valido'),
    check ('pass')
    .isLength({min:3, max:12}).withMessage('La contraseña debe tener entre un minimo de 3 y 12 caracteres'),
    check  ('passrepeat')
    .custom((passrepeat,{req}) => {
        if (passrepeat == req.body.pass ){
            return true
        } else {
            return false
        }
    }).withMessage('Las contraseñas no coinciden'),
    check('nombre')
    .notEmpty().withMessage('Este campo es obligatorio'),
    check('apellido')
    .notEmpty().withMessage('Este campo es obligatorio'),
    
], procesoRegistro);

router.post('/registro', uploadImages.any(),procesoRegistro, registroValidator);


router.get('/login', login);
router.post('/login',[
    check('usuario')
    .notEmpty().withMessage('Este campo es obligatorio'),
    check('contrasenia')
    .notEmpty().withMessage('Este campo es obligatorio'),
], procesoLogin);
router.post('/login', procesoLogin);

module.exports = router;