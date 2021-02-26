var express = require('express');
var router = express.Router();

const {check, body} = require('express-validator');

const {login,procesoLogin,procesoRegistro,registro,perfil,logout} = require('../controllers/usersController');
const loginValidator = require ('../validations/loginValidator');
const registroValidator = require('../validations/registroValidator');
const uploadImages = require('../middlewares/uploadImages');
const userCheck = require('../middlewares/userCheck')

/* GET home page. */

// login y register
router.get ('/registro', registro);
router.post('/registro', uploadImages.any(), registroValidator,procesoRegistro);


router.get('/login', login);
router.post('/login',loginValidator, procesoLogin);

router.get('/logout',logout)

router.get('/perfil',userCheck, perfil)


module.exports = router;