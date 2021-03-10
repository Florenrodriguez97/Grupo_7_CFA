module.exports = (sequelize, dataTypes) => {

    const alias = 'product_combo';
    const cols ={
        id:{
            types: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        name:{
            types: dataTypes.STRING(100),
            allowNull : false,
        },
        id_product:{
            types: dataTypes.INTEGER,
            allowNull : false,
            },
        id_combo:{
                types: dataTypes.INTEGER,
                allowNull : false,
                },
        
    }
    const config ={
        tableName: 'product_combo',
        timestamps: false,
    }
    const ProductCombo = sequelize.define(alias,cols,config);

    ProductCombo.associate = function(models) {
            ProductCombo.hasMany(models.Combo , {
                as:"Combo",
                foreignKey: "id_combo",
            }) 
    }
    

    return ProductCombo

}