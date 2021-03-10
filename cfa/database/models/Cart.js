module.exports = (sequelize, dataTypes) => {

    const alias = 'cart';
    const cols ={
        id:{
            types: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        quantity:{
            types: dataTypes.INTEGER,
            allowNull : false,
        },
        id_User:{
            types: dataTypes.INTEGER,
            allowNull : false,
            },
        id_product:{
                types: dataTypes.INTEGER,
                allowNull : false,
            },
           

        
    }
    const config ={
        tableName: 'cart',
        timestamps: false,
    }

    const Cart = sequelize.define(alias,cols,config);
    return Cart


    


}
