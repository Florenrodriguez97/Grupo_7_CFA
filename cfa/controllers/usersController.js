const { validationResult, body} = require('express-validator');

const usersController = {
    registro: (req,res) => {   
        res.render('registro')
    },
    procesoRegistro: (req,res) => {
        let errores = validationResult (req);

        if (!errores.isEmpty()){
            return res.render('/users/registro',{ 
                errores : errores.mapped()
            })
        }
    },
    login:(req,res) => {
        res.render('login')
    },
    procesoLogin: (req,res) => {
        res.send(req.body)
    }
}

module.exports = usersController;
