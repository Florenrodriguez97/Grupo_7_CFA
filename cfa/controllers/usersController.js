const { validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');
const users_db = JSON.parse(fs.readFileSync('./data/usuarios.json'));

const usersController = {
    registro: (req, res) => {
        res.render('registro')
    },
    procesoRegistro: (req, res) => {

        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.render('registro', {
                errores: errores.mapped(),
                data: req.body
            })

        } else {
            const { email, pass, nombre, apellido } = req.body;
            let lastID = 0;
            users_db.forEach(usuario => {
                if (usuario.id > lastID) {
                    lastID = usuario.id
                }
            });

            const passHash = bcrypt.hashSync(pass, 12);
            const nuevoUsuario = {
                id: +lastID + 1,
                email,
                pass: passHash,
                nombre,
                apellido,
                avatar: req.files[0].filename || 'sin avatar'
            }

            users_db.push(nuevoUsuario);
            fs.writeFileSync('./data/usuarios.json', JSON.stringify(users_db, null, 2), 'utf-8');

            res.redirect('login');
        }
    },
    login: (req, res) => {
        res.render('login')
    },
    procesoLogin: (req, res) => {
       
        let errores = validationResult(req);

        const { email, pass, recordar } = req.body;

        if (!errores.isEmpty()) {
            return res.render('login', {
                errores: errores.mapped(),
                data:req.body
            })
        } else {
            let result = users_db.find(usuario => usuario.email === email.trim());

            if (result) {
                if (bcrypt.compareSync(pass.trim(), result.pass)){
                   
                    req.session.usuario = {
                        id : result.id,
                        nombre : result.nombre,
                        avatar : result.avatar
                    }

                    if(recordar != undefined){
                        res.cookie('perfilUsuario',req.session.usuario,{
                            maxAge : 1000 * 60 * 60 * 24 * 7 //cookie de una semana de duracion
                        })
                    }

                    res.redirect('perfil')
                }

            }
            res.render('login', {
                errores: {
                    pass:{
                        msg:'Credenciales Invalidas'
                    }
                },
                data:req.body
            })
        }
    },
    perfil : (req,res) => {
        res.render('perfil')
    },
    logout : (req,res) => {
        req.session.destroy();
        if(req.cookies.perfilUsuario){
            res.cookie('perfilUsuario','',{maxAge:-1})
        }
        res.redirect('/')
    }
}

module.exports = usersController;
