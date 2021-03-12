module.exports = (sequelize, dataTypes) => {

    const alias = 'product_combo';
    const cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull : false,
        },
        id_product:{
            type: dataTypes.INTEGER,
            allowNull : false,
            },
        id_combo:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        
    }
    const config ={
        tableName: 'product_combo',
        timestamps: false,
    }
    const ProductCombo = sequelize.define(alias,cols,config);

    ProductCombo.assosiate=function(models){
        ProductCombo.belongsTo(models.Products,{
            as : 'product',
            foreingKey : 'id_product'
        }),
        ProductCombo.belongsTo(models.Combos,{
            as : 'combo',
            foreingKey : 'id_combo'
        })
    }
    

    return ProductCombo

}