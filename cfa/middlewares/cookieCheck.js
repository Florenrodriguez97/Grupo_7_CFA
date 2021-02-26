module.exports = (req,res,next) => {
    if(req.cookies.perfilUsuario){
        req.session.usuario = req.cookies.perfilUsuario
    }
    next()
}