const { validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

const usersController = {
    registro: (req, res) => {
        res.render('registro', {
            usuario: req.session.usuario
        })
    },
    procesoRegistro: (req, res, next) => {

        let errores = validationResult(req);

        const { email, password, name, last_name } = req.body;
        const passHash = bcrypt.hashSync(password.trim(), 12);
        
        if (!errores.isEmpty()) {
            return res.render('registro', {
                errores: errores.mapped(),
                data: req.body,
                usuario: req.session.usuario
            })
        } else {

            db.Users.create({
                email: email.trim(),
                password: passHash,
                name: name.trim(),
                last_name: last_name.trim(),
                avatar: req.files[0] ? req.files[0].filename : 'default_user.png',
            })
                .then(result => {

                    return res.redirect('login');
                })
                .catch(errores => console.log(errores))
        }

    },
    login: (req, res) => {
        res.render('login', {
            usuario: req.session.usuario
        })
    },
    procesoLogin: (req, res, next) => {

        let errores = validationResult(req);

        const { email, pass, recordar } = req.body;
        
        if (!errores.isEmpty()) {
            return res.render('login', {
                errores: errores.mapped(),
                data: req.body,
                usuario: req.session.usuario
            })
        } else {
            
            db.Users.findOne({
                where: {
                    email: email
                }
            })
                .then(result => {
                    if(!result){
                        return res.render('login', {
                            errores: {
                                pass: {
                                    msg: 'Email no registrado'
                                }
                            },
                            data: req.body,
                            usuario: req.session.usuario
                        })
                    }
                    if (bcrypt.compareSync(pass.trim(), result.password)) {
                        req.session.usuario = {
                            id: result.id,
                            email: result.email,
                            name: result.name,
                            last_name: result.last_name,
                            avatar: result.avatar,
                            admin: result.admin
                        }
                        if (recordar != undefined) {
                            res.cookie('perfilUsuario', req.session.usuario, {
                                maxAge: 1000 * 60 * 60 * 24 * 7 //cookie de una semana de duracion
                            })
                        }
                        res.locals.usuario = req.session.usuario
                        return res.redirect('perfil')
                    } else {
                        return res.render('login', {
                            errores: {
                                pass: {
                                    msg: 'Credenciales Invalidas'
                                }
                            },
                            data: req.body
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                    res.send(error)
                })
        }
    },
    perfil: (req, res) => {
        res.render('perfil', {
            usuario: req.session.usuario
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.perfilUsuario) {
            res.cookie('perfilUsuario', '', { maxAge: -1 })
        }
        res.redirect('/')
    }
}

module.exports = usersController;
