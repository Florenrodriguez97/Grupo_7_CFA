const db = require ('../database/models');
const {Op} = require('sequelize');
const productos = require('../data/productos');

const productosController = {
    productos:(req,res) =>{
        let categorias = [] 
        
        productos.forEach(producto => {
            categorias.push(producto.categoria)
        });

        const categoriasArr = new Set(categorias) //creo nuevo array con valores unicos
        let categoriasList = [...categoriasArr] //guardo en el nuevo array los valores unicos

        res.render('productos',{
            productos,
            categoriasList
        })
    },
   /* carga: (req,res) =>{
        res.render('cargaProducto')
    },*/
    carrito: (req,res) =>{
        res.render('carrito')
    },
    
    detalle: (req,res) =>{
        let prod=productos;
        const id = req.params.id;
        const product = productos.find (product => {
            return product.id === +id
        });
        let aleatorio2 = [];
        let aleatorio = [];
        for (let i = 0; i < 2; i++) {
            let ran = Math.floor(Math.random()*(prod.length))
            let seleccion = prod[ran];
             aleatorio.push(seleccion);
            }
        for (let i = 0; i < 2; i++) {
            let ran = Math.floor(Math.random()*(prod.length))
            let seleccion = prod[ran];
                aleatorio2.push(seleccion);
            }    
           
        res.render('detalle', {
            product,
            aleatorio,
            aleatorio2
        });
    },

    
    categoria: (req,res) =>{
        let categ = req.params.categ;
        let productosCateg = [];
        
        productos.forEach(producto => {
            if(producto.categoria == categ){
                productosCateg.push(producto)
            }
        });

        
        let categorias = [] 
        
        productos.forEach(producto => {
            categorias.push(producto.categoria)
        });

        const categoriasArr = new Set(categorias) //creo nuevo array con valores unicos
        let categoriasList = [...categoriasArr] //guardo en el nuevo array los valores unicos

        res.render('categoria',{
            productos,
            categoriasList,
            productosCateg
        })
    },
    editar: (req,res)=>{
        res.render('editar')
    },
    buscar: (req,res)=>{
        const buscar = req.query.buscar;

        let categorias = []

        productos.forEach(producto => {
            categorias.push(producto.categoria)
        });

        const categoriasArr = new Set(categorias) //creo nuevo array con valores unicos
        let categoriasList = [...categoriasArr] //guardo en el nuevo array los valores unicos

        const resultado = productos.filter(producto => {
            return producto.nombre.toLowerCase().includes(buscar)
        })
        
        res.render('productos', {
            categoriasList,
            productos: resultado
        })
    },
    
    listar : (req,res) =>{
         let offset = +req.params.offset || 0;
         db.Productos.findAll({
             order: [
                 ['productos' , 'ASC']
             ]
             .then (productos => {
             return res.render('listarProducto', {
                 productos,
             })
         })
         })
         
    },
    store : (req,res) =>{
        const {name,detail,image , price, offer , featured} = req.body;
    
        db.Productos.create({
            name,
            detail,
           image,
           price,
           offer,
           featured 
        })
        .then(newProduct => 
            console.log(newProduct))
            res.redirect('productos/listar')
        .catch (error => res.send (error))
    },
    edit: (req,res) =>{

    },
    update: (req,res) =>{

    },
}

module.exports = productosController;