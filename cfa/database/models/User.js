module.exports = (sequelize, dataTypes) => {

const alias = "Users";


const cols ={
    id : {
        type : dataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    email : {
        type: dataTypes.STRING(100),
        allowNull : false,
        unique : true

    },
    password: {
        type : dataTypes.STRING(100),
        allowNull: false
    },
    name : { 
        type : dataTypes.STRING (100),
        allowNull: false
    },
    last_name : { 
        type : dataTypes.STRING(100),
        allowNull: false
    },
    dni : { 
        type: dataTypes.INTEGER(11),
        defaultValue : null
    },
    avatar : {
        type : dataTypes.STRING(500),
        allowNull: false,
        defaultValue: "no image"

    },
    admin : {
        type: dataTypes.TINYINT(4),
        allowNull: false,
        defaultValue: 0
    },
    province : {
        type : dataTypes.STRING(150),
        defaultValue: null
    },
    location: {
        type : dataTypes.STRING(15),
        defaultValue: null
    },
    address: { 
        type: dataTypes.STRING(150),
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
        underscored : true
    }
    const User = sequelize.define(alias, cols, config);
   

    return User;
}







