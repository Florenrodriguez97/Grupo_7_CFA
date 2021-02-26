const { validationResult, body } = require('express-validator');
let fs = require('fs');

const usersController = {
    registro: (req, res) => {
        res.render('registro')
    },
    crear: function (req, res) {
        let usuario = {
            email: req.body.email,
            pass: req.body.pass,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
        }
        let archivoUsuarios = fs.readFile('usuarios.json', { encoding: 'utf-8' });
        let usuarios;
        if (archivoUsuarios == "") {
            usuarios = [];
        }else {
             usuarios = JSON.parse(archivoUsuarios)
        }
        usuarios.push(usuarios);

        usuariosJSON = JSON.stringify(usuarios);
        fs.writeFileSync('usuarios.json', usuariosJSON);
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
    usuarios.forEach(usuarios => {
        if (usuarios_id > lastID) {
            lastID = usuarios.id
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

    usuarios_db.push(nuevoUsuario);
    fs.writeFileSync('./data/users.json', JSON.stringify(usuarios_db, null, 2), 'utf-8');
    
    res.redirect('users/login');
}
    },
login: (req, res) => {
    res.render('login')
},
    procesoLogin: (req, res) => {
        res.render ('login')
        let errores = validationResult(req);

        const {email, pass, recordar} = req.body;

        if (!errores.isEmpty()) {
            return res.render('login', {
                errores: errores.errors
                
            })

        }else{
            let result = users_db.find(user=> user.email === email);
        if(result){
            if(bycrypt.compareSync(pass.trim (), result.pass)){

                req.session.user ={
                    id : result.id,
                    username : result.username,

                }
                if(recordar){
                    res.cookie('usuario',req.session.user, {
                        maxAge : 1000 * 60
                    })
                }
                res.redirect ('/usuario/perfil')
            }

        }
        res.render('login', {
            errores : [
            {
                msg: "Datos invalidos"
            }

            ]
        })
        }
    }
}

module.exports = usersController;
