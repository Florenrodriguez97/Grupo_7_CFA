var express = require('express');
var router = express.Router();
const {login,procesoLogin,procesoRegistro,registro} = require('../controllers/usersController');

/* GET home page. */
router.get('/registro', registro);
router.post('/registro', procesoRegistro);
router.get('/login', login);
router.post('/login', procesoLogin);

module.exports = router;