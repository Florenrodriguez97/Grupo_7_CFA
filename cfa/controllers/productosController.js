const db = require('../database/models');
const { Op, Sequelize } = require('sequelize');

const productosController = {
    productos: (req, res) => {
        let productos = db.Products.findAll()
        let categoriasList = db.Categorys.findAll()
        Promise.all([productos, categoriasList])
            .then(([productos, categoriasList]) => {
                res.render('productos', {
                        usuario:req.session.usuario,
                    productos,
                    categoriasList
                })
            })
    },

    carrito: (req, res) => {
        res.render('carrito',{
            usuario:req.session.usuario
        })
    },

    detalle: (req, res) => {
        let product = db.Products.findByPk(req.params.id)
        
        let aleatorio = db.Products.findAll({
            order : [
                [Sequelize.literal('RAND()')]
            ],   
        })
        let aleatorio2 =db.Products.findAll({
            order : [
                [Sequelize.literal('RAND()')]
            ],
            limit : 2
        })
        Promise.all([product,aleatorio,aleatorio2])
        .then(([product,aleatorio,aleatorio2])=>{
            
            let similares = aleatorio.filter(dato=>{
                return dato.id_category==product.id_category
            })
            let limite = []
            for (let i = 0; i < 1; i++) {
                limite.push(similares[0]);
                limite.push(similares[1]);
            }
            res.render('detalle',{
                usuario:req.session.usuario,
                product,
                limite,
                aleatorio2
            }); 
        }) 
    },


    categoria: (req, res) => {
        let items = db.Categorys.findOne({
            where: {
                name: req.params.categ
            },
            include: [
                { association: 'products' }
            ]
        })
        let categoriasList = db.Categorys.findAll()

        Promise.all([items, categoriasList])
            .then(([items, categoriasList]) => {
                res.render('productos', {
                    usuario:req.session.usuario,
                    productos: items.products,
                    categoriasList,
                })
            })
    },
    buscar: (req, res) => {
        let productos = db.Products.findAll({
            where: {
                [Op.or]: [
                    {
                        'name': {
                            [Op.substring]: req.query.buscar
                        }
                    },
                    {
                        'detail': {
                            [Op.substring]: req.query.buscar
                        }
                    },
                ]
            },
        })
        let categoriasList = db.Categorys.findAll()

        Promise.all([productos, categoriasList])
            .then(([productos, categoriasList]) => {
                res.render('productos', {
                    usuario:req.session.usuario,
                    productos,
                    categoriasList
                })
            })
    },
}

module.exports = productosController;