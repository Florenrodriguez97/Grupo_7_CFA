const express = require ('express');
const router = express.Router();
const preguntasController = require ('../controllers/preguntasController')

router.get("/", preguntasController.index)

module.exports = router;