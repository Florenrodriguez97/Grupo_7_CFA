module.exports = (req,res,next) => {
    if(!req.session.usuario){ /* ICONO HEADER si no estoy logeado voy a login */
        next()
    }else{
        res.redirect('/users/perfil')/* si ya estoy logeado voy al perfil */
    }
}