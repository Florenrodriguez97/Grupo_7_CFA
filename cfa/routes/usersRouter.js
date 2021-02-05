var express = require('express');
var router = express.Router();
const usersController =require('../controllers/usersController')

/* GET home page. */
router.get('/registro', usersController.registro);

module.exports = router;