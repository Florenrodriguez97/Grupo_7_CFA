module.exports = (sequelize, dataTypes) => {

const alias = "Usuarios",


const cols ={
    id : {
        type : dataTypes.INTERGER(10).UNSIGNED,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    email : {
        type: dataTypes.VARCHAR(100).UNSIGNED,
        allowNull : false,
        unique : true

    },
    password: {
        type : dataTypes.VARCHAR(100).UNSIGNED,
        allowNull: false
    },
    name : { 
        type : dataTypes.VARCHAR (100).UNSIGNED,
        allowNull: false
    },
    last_name : { 
        type : dataTypes.VARCHAR(100).UNSIGNED,
        allowNull: false
    },
    dni : { 
        type: dataTypes.INTERGER(11).UNSIGNED,
        defaultValue : null
    },
    avatar : {
        type : dataTypes.VARCHAR(500).UNSIGNED,
        allowNull: false

    },
    admin : {
        type: dataTypes.TINYINT(4).UNSIGNED,
        allowNull: false
    },
    province : {
        type : dataTypes.VARCHAR(150).UNSIGNED,
        allowNull: false ,
        defaultValue: null
    },
    location: {
        type : dataTypes.VARCHAR(150).UNSIGNED,
        defaultValue: null
    },
    address: { 
        type: dataTypes.VARCHAR(150).UNSIGNED,
        defaultValue: null
    },
    phone : {
        type: dataTypes.INTERGER(11),
        defaultValue: null
    },


}

    const config = {
        tableName : 'users',
        timestamps : false,
        underscored : false, 

    }
    const Users = sequelize.define(alias, cols, config);
   

    return Users;
}