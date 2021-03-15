const db = require ('../database/models')

const productos = require('../data/productos');
const fs = require('fs')

module.exports = {
    index: (req, res) => {
        res.render('admin/index');
    },
    categoria: (req, res) => {
        let categ = req.params.categ;
        let productosCateg = [];

        productos.forEach(producto => {
            if (producto.categoria == categ) {
                productosCateg.push(producto)
            }
        });

        let categorias = []

        productos.forEach(producto => {
            categorias.push(producto.categoria)
        });

        const categoriasArr = new Set(categorias) //creo nuevo array con valores unicos
        let categoriasList = [...categoriasArr] //guardo en el nuevo array los valores unicos

        res.render('admin/categoria', {
            productos,
            categoriasList,
            productosCateg
        })
    },
    buscar: (req, res) => {
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
        res.render('admin/productos', {
            categoriasList,
            productos: resultado
        })
    },
    listarProducto: (req, res) => {
        let categorias = []

        productos.forEach(producto => {
            categorias.push(producto.categoria)
        });

        const categoriasArr = new Set(categorias) //creo nuevo array con valores unicos
        let categoriasList = [...categoriasArr] //guardo en el nuevo array los valores unicos

        res.render('admin/productos', {
            productos,
            categoriasList
        })
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
           
        res.render('admin/detalle', {
            product,
            aleatorio,
            aleatorio2
        });
    },
    crearProducto: (req, res) => {
        res.render('cargaProducto');
    },
    
    guardarProducto: (req, res, next) => { //store
        
        let lastId = 1;
        productos.forEach((producto) => {
            if (producto.id > lastId) {
                lastId = producto.id
            }
        });
        const {name, detail, image, prince, offer, featured, category }= req.body;

        let producto =
        {
            id: lastId + 1,
            img: req.files[0].filename,
            nombre,
            detalle,
            precio,
            oferta,
            categoria
        }
        
        productos.push(producto);
        fs.writeFileSync('./data/productos.json', JSON.stringify(productos), 'utf-8');
        res.redirect('/admin/productos'); 
    },


    editarProducto: (req, res) => {
        const producto = productos.find(producto => producto.id === +req.params.id)
        res.render('admin/editarProducto',{
            producto
        })
        const {name, detail, image, prince, offer, featured, category }= req.body;
     
      
        db.Product.update ({
            name,
            detail,
            image,
            price,
            offer,
            featured,
             },
        {
            where: {
                id: req.params.id
            }
        
        })
        .then(result => {
            console.log(result)
            return res.redirect ('/admin/editarProducto/'+ req.params.id)
        })
        .catch(error => res.send(error))
    
    },
    actualizarProducto: (req, res, next) => {
        const {name, detail, image, prince, offer, featured, category }= req.body;

        productos.forEach(producto => {
            if(producto.id === +req.params.id){
                producto.id = +req.params.id;
                producto.img = req.files[0].filename;
                producto.nombre = nombre;
                producto.detalle = detalle;
                producto.precio = precio;
                producto.oferta = oferta;
                producto.categoria = categoria
            }
        });
        fs.writeFileSync('./data/productos.json', JSON.stringify(productos), 'utf-8');
        res.redirect('/admin/productos'); 
    },
    borrarProducto: (req,res) => {
        productos.forEach(producto => {
            if (producto.id === +req.params.id) {
                let eliminar = productos.indexOf(producto);
                productos.splice(eliminar, 1)
            }
        });

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            console.log ('El producto ha sido eliminado')
            return res.redirect('/admin/eliminarProducto')
        })

      

        fs.writeFileSync('./data/productos.json', JSON.stringify(productos), 'utf-8');

        res.redirect('/admin/productos');
    },
    
    
}
