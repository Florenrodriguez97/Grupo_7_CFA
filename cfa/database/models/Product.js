module.exports = (sequelize, dataTypes) => {
    const alias = 'Products';
    const cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        name:{
            type: dataTypes.STRING(200),
            allowNull : false,
        },
        detail:{
            type: dataTypes.STRING(900),
            allowNull : false,
            },
        image:{
            type: dataTypes.STRING(500),
            allowNull : false,
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        offer:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        featured:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
        id_category:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
    }
    const config ={
        tableName: 'product',
        timestamps: false,
    }

    const Product = sequelize.define(alias,cols,config);

    
    return Product

}