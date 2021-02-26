var express = require('express');
var router = express.Router();

const {check, body} = require('express-validator');

const {login,procesoLogin,procesoRegistro,registro} = require('../controllers/usersController');
const loginValidator = require ('../validations/loginValidator');
const registroValidator= require('../validations/registroValidator');
const uploadImages=require('../middlewares/uploadImages');

/* GET home page. */

// login y register
router.get ('/registro', registro);
router.post('/registro', uploadImages.any(), registroValidator,procesoRegistro);


router.get('/login', login);
router.post('/login',loginValidator, procesoLogin);




module.exports = router;