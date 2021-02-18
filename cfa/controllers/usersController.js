const usersController = {
    registro: (req,res) => {
        
        res.render('registro')
    },
    procesoRegistro: (req,res) => {
        res.send(req.body)
    },
    login:(req,res) => {
        res.render('login')
    },
    procesoLogin: (req,res) => {
        res.send(req.body)
    }
}

module.exports = usersController;