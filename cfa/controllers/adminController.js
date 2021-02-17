const productos = require('../data/productos');

module.exports = {
    index: (req,res) => {
        res.render('admin/index');
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

        res.render('admin/categoria',{
            productos,
            categoriasList,
            productosCateg
        })
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
        res.render('admin/productos',{
            categoriasList,
            productos : resultado
        })
    },
    listarProducto: (req,res) => {
        let categorias = [] 
        
        productos.forEach(producto => {
            categorias.push(producto.categoria)
        });

        const categoriasArr = new Set(categorias) //creo nuevo array con valores unicos
        let categoriasList = [...categoriasArr] //guardo en el nuevo array los valores unicos

        res.render('admin/productos',{
            productos,
            categoriasList
        })
    },
    crearProducto: (req,res) => {
        res.render('admin/cargaProducto');
    },
    guardarProducto: (req,res) => { //store
        let lastID = 1;
        productos.forEach(producto =>{
            if (producto.id > lastID){
                lastID = producto.id
            }
        });

        const {img, nombre, detalle, precio, oferta, categoria} = req.body;

        let producto = {
            
        }

    },
    editarProducto: (req,res) => {
        res.render('admin/editarProducto');
    },
    actualizarProducto: (req,res) => {

    },
    borrarProducto: (req,res) => {

    }
}