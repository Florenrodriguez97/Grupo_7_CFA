const fs = require('fs');
const {check, body} = require('express-validator');
const users_db=JSON.parse(fs.readFileSync('./data/usuarios.json'))

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El nombre de usuario es requerido'),

    check('apellido')
    .notEmpty().withMessage('El apellido es requerido'),
    
    check('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('El email debe ser valido'),
    body('email').custom(value => {
        let result = users_db.find(usuario => usuario.email === value.trim());
        if(result){
            return false
        }else{
            return true
        }
    })
    .withMessage('El email ya esta registrado'),

    check('pass')
    .notEmpty().withMessage('La contraseña es requerida')
    .isLength({
        min:6, 
        max:12
    })
    .withMessage('La contraseña debe tener un mínimo de 6 y un máximo de 12'),

    body('pass2').custom((value,{req}) => {
        if(value !== req.body.pass){
            return false
        }else{
            return true
        }
    })
    .notEmpty().withMessage('Las contraseñas no coinciden')

]