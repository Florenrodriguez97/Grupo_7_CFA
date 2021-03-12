module.exports = (sequelize, dataTypes) => {

    let alias = 'Carts';
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        quantity:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        id_User:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        id_product:{
            type: dataTypes.INTEGER,
            allowNull : false,
        }      
    }
    let config ={
        tableName: 'cart',
        timestamps: false,
        underscored: true,
    }

    const Cart = sequelize.define(alias,cols,config);
    Cart.assosiate=function(models){
        Cart.belongsTo(models.Users,{
            as : 'user',
            foreingKey : 'id_user'
        }),
        Cart.hasMany(models.Products,{
            as : 'product',
            foreingKey : 'id_product'
        })
    }

    return Cart
}
