module.exports = (sequelize, dataTypes) => {

    const alias = "carrito";
    
    
    const cols ={
        id : {
            type : dataTypes.INTEGER(11),
            autoIncrement : true,
            allowNull : false,
            primaryKey: true
        },
        id_user : {
            type: dataTypes.INTEGER(11),
            allowNull : false
        },
        id_product: {
            type : dataTypes.INTEGER(11),
            allowNull: false
        },
        quantity : { 
            type : dataTypes.INTEGER(11),
            allowNull: false
        },

    }
    
        const config = {
            tableName : 'cart',
            timestamps : false,
            underscored : false, 
    
        }
        const Cart = sequelize.define(alias, cols, config);
       
    
        return Cart;
    }
    