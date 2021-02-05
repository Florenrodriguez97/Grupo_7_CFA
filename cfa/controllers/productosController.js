const productosController = {
    carga: (req,res) =>{
        res.render('cargaProducto')
    },
    carrito: (req,res) =>{
        res.render('carrito')
    },
    detalle: (req,res) =>{
        res.render('detalle')
    }
}

module.exports = productosController;