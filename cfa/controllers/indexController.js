const db = require('../database/models');
const { Op } = require('sequelize');
const indexController = {
    index: (req,res) =>{
        let aleatorio = db.Products.findAll()
        let aleatorio2 =db.Products.findAll({
            where:{
                'offer':{
                    [Op.gt]: 1
                }
            },
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
        res.render('comboSeleccionado', {
            usuario:req.session.usuario
        })

    }
}

module.exports = indexController;