const productos = require('../data/productos');

const db = require('../database/models');
const indexController = {
    index: (req,res) =>{
        let aleatorio = db.Products.findAll()
        let aleatorio2 =db.Products.findAll({
            limit : 4,
            offset: 6
        })
        Promise.all([aleatorio,aleatorio2])
        .then(([aleatorio,aleatorio2])=>{
           let usuario = req.session.usuario
           console.log(usuario);
            res.render('index',{
                usuario,
                aleatorio,
                aleatorio2
            }); 
        })       
    }
}

module.exports = indexController;