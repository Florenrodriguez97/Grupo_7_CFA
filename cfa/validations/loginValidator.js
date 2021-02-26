const fs = require('fs');
const {check, body} = require('express-validator');
const users_db=JSON.parse(fs.readFileSync('./data/usuarios.json'))

module.exports = [
    check('usuario')
    .notEmpty().withMessage('Este campo es obligatorio'),
    check('contrasenia')
    .notEmpty().withMessage('Este campo es obligatorio'),
]