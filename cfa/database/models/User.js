module.exports = (sequelize, dataTypes) => {

const alias = "usuarios";


const cols ={
    id : {
        type : dataTypes.INTERGER(10).UNSIGNED,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    email : {
        type: dataTypes.VARCHAR(100),
        allowNull : false,
        unique : true

    },
    password: {
        type : dataTypes.VARCHAR(100),
        allowNull: false
    },
    name : { 
        type : dataTypes.VARCHAR (100),
        allowNull: false
    },
    last_name : { 
        type : dataTypes.VARCHAR(100),
        allowNull: false
    },
    dni : { 
        type: dataTypes.INTERGER(11),
        defaultValue : null
    },
    avatar : {
        type : dataTypes.VARCHAR(500),
        allowNull: false

    },
    admin : {
        type: dataTypes.TINYINT(4),
        allowNull: false
    },
    province : {
        type : dataTypes.VARCHAR(150),
        allowNull: false ,
        defaultValue: null
    },
    location: {
        type : dataTypes.VARCHAR(15),
        defaultValue: null
    },
    address: { 
        type: dataTypes.VARCHAR(150),
        defaultValue: null
    },
    phone : {
        type: dataTypes.INTEGER(11),
        defaultValue: null
    },


}

    const config = {
        tableName : 'users',
        timestamps : false,
        underscored : false, 
        modelName : "user"

    }
    const User = sequelize.define(alias, cols, config);
   
    User.associate = function (models){
        User.belongsToMany(models.cart ,{
           as: "carrito",
           through: "id_user",
        })
    
    }

    return User;
}







