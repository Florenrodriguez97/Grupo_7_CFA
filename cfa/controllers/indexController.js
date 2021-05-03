const db = require('../database/models');
const { Op, Sequelize } = require('sequelize');
const ProductCombo = require('../database/models/ProductCombo');
const indexController = {
    index: (req,res) =>{
        let aleatorio = db.Products.findAll({
            where:{
                'featured':{
                    [Op.eq]: 1
                },    
            },
            order : [
                [Sequelize.literal('RAND()')]
            ],
        })
        let aleatorio2 =db.Products.findAll({
            where:{
                'offer':{
                    [Op.gt]: 1
                },    
            },
            order : [
                [Sequelize.literal('RAND()')]
            ],
            limit : 4
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
    },
    armadoPc: (req,res) =>{
        db.Combos.findAll()
        .then(combos=>{
            res.render ('armadoPc', {
            usuario:req.session.usuario,
            combos
        })
        })
        .catch(errors=>console.log(errors))
    },
    
    contacto: (req,res)=> {
        res.render ('contacto', {
            usuario:req.session.usuario
        })
    },
    preguntas: (req,res) =>{
        res.render ('preguntas',{
            usuario:req.session.usuario
        })
    },
    comboSeleccionado: (req,res)=> {
        db.Combos.findAll({
            where:{
                id: req.params.id
            },
            include:[{association:"products"}],
        })
        .then(productCombo => {
            
            let total=0;
            productCombo.forEach(prod => {
                prod.products.forEach(data => {
                    total += data.price
                })
            });
            res.render('comboSeleccionado', {
            usuario:req.session.usuario,
            productCombo,
            total
        })
        })
        .catch(error =>{res.send(error)})
    }
}

module.exports = indexController;