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
        const id = req.params.id;
        console.log(typeof id)
        const product = productos.find (product => {
            return product.id === +id
        });
        res.render('detalle', {
            product,
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

        const resultado = productos.filter(producto=>{
            return producto.name.toLowerCase().includes(buscar)
        })
        res.render('productos',{
            categoriasList,
            productos : resultado
        })
    }
}

module.exports = productosController;