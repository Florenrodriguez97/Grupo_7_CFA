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
    carga: (req,res) =>{
        res.render('cargaProducto')
    },
    carrito: (req,res) =>{
        res.render('carrito')
    },
    detalle: (req,res) =>{
        res.render('detalle')
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
    }
}

module.exports = productosController;