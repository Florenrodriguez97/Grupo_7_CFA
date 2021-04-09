module.exports = (req,res,next) => {
    if(req.session.usuario.admin == 1){
        res.locals.usuario = req.session.usuario
        next()
    }else{
        res.redirect('/users/login')
    }
}