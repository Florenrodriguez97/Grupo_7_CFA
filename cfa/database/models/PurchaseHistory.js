module.exports = (sequelize, dataTypes) => {

    const alias = 'purchase_history';
    const cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        id_user:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        id_product:{
            type: dataTypes.INTEGER,
            allowNull : false,
            },
        price:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        quantity:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },

    }
    const config ={
        tableName: 'purchase_history',
        timestamps: false,
    }

    const PurchaseHistory = sequelize.define(alias,cols,config);
    
    PurchaseHistory.assosiate=function(models){
        PurchaseHistory.belongsTo(models.Users,{
            as : 'user',
            foreingKey : 'id_user'
        }),
        PurchaseHistory.belongsTo(models.Products,{
            as : 'product',
            foreingKey : 'id_product'
        })
    }
    
    return PurchaseHistory

}