module.exports = {
    index: (req,res) =>{
        res.render ('preguntas',{
            usuario:req.session.usuario
        })
    }
}