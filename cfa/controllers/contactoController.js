module.exports = {
    index: (req,res) =>{
        res.render ('contacto',{
            usuario:req.session.usuario
        })
    }
}