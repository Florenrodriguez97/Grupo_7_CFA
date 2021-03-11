var express = require('express');
var router = express.Router();

const {check, body} = require('express-validator');

const {login,procesoLogin,procesoRegistro,registro,perfil,logout} = require('../controllers/usersController');
const loginValidator = require ('../validations/loginValidator');
const registroValidator = require('../validations/registroValidator');
const uploadImages = require('../middlewares/uploadImages');
const userCheck = require('../middlewares/userCheck')
const sessionCheck = require('../middlewares/sessionCheck')

/* GET home page. */

// login y register
router.get ('/registro', sessionCheck, registro);
router.post('/registro', uploadImages.any(),procesoRegistro);


router.get('/login', sessionCheck, login);
router.post('/login', procesoLogin);

router.get('/logout',logout)

router.get('/perfil',userCheck, perfil)


module.exports = router;