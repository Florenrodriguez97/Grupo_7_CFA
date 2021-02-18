const productos = require('../data/productos');
const fs = require ('fs')

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
            return producto.nombre.toLowerCase().includes(buscar)
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
        let lastId = 1;
        productos.forEach((producto) =>{
            if (producto.id > lastId){
                lastId = producto.id
            }
        });
        const {img, nombre, detalle, precio, oferta, categoria}= req.body;
        
        let Producto= 
        {
        id,
        img,
         nombre, 
         detalle, 
         precio:+precio, 
         oferta, 
         categoria}

       
      
        productos.push(producto);
        fs.writeFileSync('/data/productos.json',JSON.stringify(autos),'utf-8');
res.redirect('admin/productos');
    },
    editarProducto: (req,res) => {
      const producto = productos.find(producto=>producto.id === +req.params.id)
  res.render('admin/editarProducto')
  producto
    },
    actualizarProducto: (req,res) => {
res.send(req.body)
    },
    borrarProducto : (req,res) => {

        productos.forEach(producto => {
            if(producto.id === +req.params.id){
                let eliminar = productos.indexOf(producto);
                productos.splice(eliminar,1)
            }
        });

        fs.writeFileSync('./data/productos.json',JSON.stringify(productos),'utf-8');

        res.redirect('/admin/productos');
    }
}
