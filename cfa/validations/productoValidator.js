const {check} = require('express-validator');

module.exports = [
   
    check('nombre')
    .notEmpty().withMessage('El nombre es requerido'),

    check('detalle')
    .notEmpty().withMessage('El detalle es requerido'),
    
    check('precio')
    .notEmpty().withMessage('El precio es requerido'),

    check('oferta')
    .notEmpty().withMessage('La oferta es requerida'),

    check('categoria')
    .notEmpty().withMessage('La categoria es requerida'),
]