const { validationResult, body} = require('express-validator');

const usersController = {
    registro: (req,res) => {   
        res.render('registro')
    },
    procesoRegistro: (req,res) => {
        let errores = validationResult (req);

        if (!errores.isEmpty()){
            return res.render('registro',{ 
                errores : errores.mapped(),
                data : req.body
            })
           
        }
    },
    login:(req,res) => {
        res.render('login')
    },
    procesoLogin: (req,res) => {
        let errores = validationResult (req);

        if(!errores.isEmpty ()){
            return res.render ('login',{
                errores : errores.mapped(),
                data : req.body
            })
        }
    }
}

module.exports = usersController;
