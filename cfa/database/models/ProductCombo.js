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
        underscored: true, 
    }
    const ProductCombo = sequelize.define(alias,cols,config);
    

    return ProductCombo

}