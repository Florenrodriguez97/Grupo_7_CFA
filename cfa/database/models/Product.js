module.exports = (sequelize, dataTypes) => {
    const alias = 'product';
    const cols ={
        id:{
            types: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        name:{
            types: dataTypes.STRING(200),
            allowNull : false,
        },
        detail:{
            types: dataTypes.STRING(900),
            allowNull : false,
            },
        image:{
                types: dataTypes.STRING(500),
                allowNull : false,
            },
        price:{
                types: dataTypes.INTEGER,
                allowNull : false,
            },
        offer:{
                types: dataTypes.INTEGER,
                allowNull : false,
            },
        featured:{
                types: dataTypes.INTEGER,
                allowNull : false,
            },
        id_category:{
                types: dataTypes.INTEGER,
                allowNull : false,
            },
    }
    const config ={
        tableName: 'product',
        timestamps: false,
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models) {
        Product.belongsToMany(models.Product , {
            as:"Productos",
            through: "cart",
            foreignKey: "id_producto",
            otherKey: "",
            timestamps: false
        }) 
    }
    return Product

}