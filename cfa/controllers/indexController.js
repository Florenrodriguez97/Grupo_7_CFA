const productos = require('../data/productos');

const db = require('../database/models');
const indexController = {
    index: (req,res) =>{
        /*let products = productos
        let aleatorio2 = [];
        let aleatorio = [];
        for (let i = 0; i < 6; i++) {
            let ran = Math.floor(Math.random()*(products.length))
            let seleccion = products[ran];
             aleatorio.push(seleccion);
            }
        for (let i = 0; i < 4; i++) {
            let ran = Math.floor(Math.random()*(products.length))
            let seleccion = products[ran];
                aleatorio2.push(seleccion);
            }*/
        let aleatorio = db.Products.findAll()
        let aleatorio2 =db.Products.findAll({
            limit : 6,
            offset: 6
        })
        Promise.all([aleatorio,aleatorio2])
        .then(([aleatorio,aleatorio2])=>{
           
            res.render('index',{
                aleatorio,
                aleatorio2
            }); 
        })   
            
       
        
    }
}

module.exports = indexController;