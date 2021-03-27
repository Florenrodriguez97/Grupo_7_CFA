const {check, body} = require('express-validator');
const db = require ('../database/models');

module.exports = [

    check('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('El email debe ser valido'),
    body('email').custom(value => {
        return db.Users.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este email ya está registrado')
            }
        })
    })
    .withMessage('El email ya esta registrado'),

    check('password')
    .notEmpty().withMessage('La contraseña es requerida')
    .isLength({
        min:6, 
        max:8
    })
    .withMessage('La contraseña debe tener un mínimo de 6 y un máximo de 8'),

    body('pass2').custom((value,{req}) => value!== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('name')
    .notEmpty().withMessage('El nombre de usuario es requerido'),

    check('last_name')
    .notEmpty().withMessage('El apellido es requerido'),

]