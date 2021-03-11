const { validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');
const users_db = JSON.parse(fs.readFileSync('./data/usuarios.json'));
const db = require ('../database/models');

const usersController = {
    registro: (req, res) => {
        res.render('registro')
    },
    procesoRegistro: (req, res) => {

        /*let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.render('registro', {
                errores: errores.mapped(),
                data: req.body
            })

        } else {*/
            const { email, password, name, last_name,dni,avatar,admin,province,location,address,phone } = req.body;
            const passHash = bcrypt.hashSync(password, 12);

            db.user.create({
                email: email(trim),
                password: passHash,
                name: name(trim),
                last_name: last_name(trim),
                dni,
                avatar,
                admin,
                province,
                location,
                address,
                phone,
            })
            .then(result => {
                console.log(result)
                return res.redirect('login');
            })
            .catch(errores=> console.log(errores))
           /* let lastID = 0;
            users_db.forEach(usuario => {
                if (usuario.id > lastID) {
                    lastID = usuario.id
                }
            });*/
           
            /*const nuevoUsuario = {
                id: +lastID + 1,
                email,
                pass: passHash,
                nombre,
                apellido,
                avatar: req.files[0].filename || 'sin avatar'
            }*/

            /*users_db.push(nuevoUsuario);
            fs.writeFileSync('./data/usuarios.json', JSON.stringify(users_db, null, 2), 'utf-8');*/

           
        
    },
    login: (req, res) => {
        res.render('login')
    },
    procesoLogin: (req, res, next) => {
       
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
                        email : result.email,
                        nombre : result.nombre,
                        apellido : result.apellido,
                        avatar : result.avatar
                    }

                    if(recordar != undefined){
                        res.cookie('perfilUsuario',req.session.usuario,{
                            maxAge : 1000 * 60 * 60 * 24 * 7 //cookie de una semana de duracion
                        })
                    }

                    return res.redirect('perfil')
                    
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

module.exports = {
    list: (req,res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            return res.render ('usuarios.json' , {
                usuarios
            })
        })
        .catch(error => res.send (error))
    }
}
module.exports = usersController;
