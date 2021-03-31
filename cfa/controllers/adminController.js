const db = require('../database/models')
const {Op} = require('sequelize')
const {validationResult} = require('express-validator')


module.exports = {
    index: (req, res) => {
        res.render('admin');
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
                res.render('admin/productos', {
                    usuario:req.session.usuario,
                    productos,
                    categoriasList
                })
            })
    },
    listarProducto: (req, res) => {
        let productos = db.Products.findAll()
        let categoriasList = db.Categorys.findAll()
        Promise.all([productos, categoriasList])
            .then(([productos, categoriasList]) => {
                res.render('admin/productos', {
                        usuario:req.session.usuario,
                    productos,
                    categoriasList
                })
            })
    },
    detalle: (req, res) => {
        let product = db.Products.findByPk(req.params.id)
        
        let aleatorio = db.Products.findAll({
            limit : 2
        })
        let aleatorio2 =db.Products.findAll({
            limit : 2
        })
        Promise.all([product,aleatorio,aleatorio2])
        .then(([product,aleatorio,aleatorio2])=>{
            res.render('admin/detalle',{
                usuario:req.session.usuario,
                product,
                aleatorio,
                aleatorio2
            }); 
        }) 
    },
    crearProducto: (req, res) => {
        db.Categorys.findAll()
            .then(result => {
                res.render('admin/cargaProducto', {
                    categorias: result
                });
            })

    },

    guardarProducto: (req, res, next) => { //store

        const { nombre, detalle, precio, oferta, categoria } = req.body;
        const errors = validationResult(req)
        if(errors.isEmpty()){
        db.Products.create({
            image: req.files[0] ? req.files[0].filename : 'default_product.png',
            name: nombre,
            detail: detalle,
            price: precio,
            offer: oferta,
            id_category: categoria,
        })
            .then(result => {
                
                res.redirect('/admin/productos');
            })
            .catch(error => res.send(error))
        }else{
            db.Categorys.findAll({
                order:[
                    ['name','ASC']
                ]
            })
            .then(categorias => {
                return res.render('admin/cargaProducto',{
                    errores : errors.mapped(),
                    old : req.body,
                    categorias
                })
            })
            .catch(error => res.send(error))
        }
    },

    editarProducto: (req, res) => {
        const errors = validationResult(req)
        if(errors.isEmpty()){
        let producto = db.Products.findOne({
            where:{
                id:req.params.id
            }
        })
        
        let categorias = db.Categorys.findAll()
        
        Promise.all([producto,categorias])
        .then(([producto,categorias]) => {
            res.render('admin/editarProducto', {
            producto,
            categorias
            })
        })
        .catch(error => res.send(error))
    }else{
        db.Categorys.findAll({
            order:[
                ['name','ASC']
            ]
        })
        .then(categorias => {
            console.log(errores);
            return res.render('admin/editarProducto',{
                errores : errors.mapped(),
                old : req.body,
                categorias
            })
        })
        .catch(error => console.log(error));
    }

    },
    actualizarProducto: (req, res, next) => {
        const { nombre, detalle, precio, oferta, categoria} = req.body;
        const {id} = req.params
        db.Products.update({
            image : req.files[0] ? req.files[0].filename : 'default_product.png',
            name : nombre,
            detail : detalle,
            price : precio,
            offer : oferta,
            category : categoria,
        },{
            where:{
                id:id
            }
        })
        .then(result => {
            console.log(result)
            return res.redirect('/admin/productos');
        })
        .catch(error => res.send(error))
        
    },
    borrarProducto: (req, res) => {
        
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                console.log('El producto ha sido eliminado')
                return res.redirect('/admin/productos');
            })
            .catch(error => res.send(error))
        
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
                res.render('admin/productos', {
                    usuario:req.session.usuario,
                    productos: items.products,
                    categoriasList,
                })
            })
            .catch(error => res.send(error))
    },

}
