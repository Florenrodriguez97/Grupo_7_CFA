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
            defaultValue: 0,
        },
        id_category:{
            type: dataTypes.INTEGER,
            allowNull : false,
        },
    }
    const config ={
        tableName: 'product',
        timestamps: false,
        underscored: true
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models){
        Product.belongsToMany(models.Users ,{ //nombre del alias 'models.Users'
           as: "carrito",
           through: "cart", //nombre de la tabla
           foreignKey: "id_product",
           otherKey: "id_user",
           timestamps: false
        })
        Product.belongsToMany(models.Users ,{ //nombre del alias 'models.Users'
           as: "historialcompra",
           through: "purchase_history", //nombre de la tabla
           foreignKey: "id_product",
           otherKey: "id_user",
           timestamps: false
        })
        Product.belongsTo(models.Categorys ,{
            as: "category",
            foreignKey: "id_category"
           
        })
        Product.belongsToMany(models.Combos ,{ //nombre del alias 'models.Users'
           as: "combos",
           through: "product_combo", //nombre de la tabla
           foreignKey: "id_product",
           otherKey: "id_combo",
           timestamps: false
        })
    }
    
    return Product

}