const { validationResult, body} = require('express-validator');

const usersController = {
    registro: (req,res) => {   
        res.render('registro')
    },
    procesoRegistro: (req,res) => {
        let errores = validationResult (req);

        if (!errores.isEmpty()){
            return res.render('registro',{ 
                errores : errores.mapped(),
                data : req.body
            })
           
        }else{
            const {email,pass,nombre,apellido}=req.body;
            let lastID= 0;
            usuarios_db.forEach(usuarios=>{
                if(usuarios_id>lastID){
                    lastID=usuarios.id
                }
            });
            
const passHash = bcrypt.hashSync(pass,12);
const nuevoUsuario={
    id:+lastID +1,
    email,
    pass: passHash,
    nombre,
    apellido,
    avatar: req.files[0].filename || 'sin avatar'
}
        
       usuarios_db.push(nuevoUsuario);
       fs.writeFileSync('./data/users.json',JSON.stringify(usuarios_db,null,2),'utf-8');
       res.redirect('users/login');
        }
    },
    login:(req,res) => {
        res.render('login')
    },
    procesoLogin: (req,res) => {
        let errores = validationResult (req);

        if(!errores.isEmpty ()){
            return res.render ('login',{
                errores : errores.mapped(),
                data : req.body
            })
        }
    }
}

module.exports = usersController;
