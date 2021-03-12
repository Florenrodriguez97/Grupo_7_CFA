module.exports = (sequelize, dataTypes) => {
    let alias = "Categorys";


    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true
        },
        name : {
            type: dataTypes.STRING(50),
            allowNull : false,
        },

    }


    const config = {
        tableName : 'category',
        timestramps : false,
        underscored : false,
    }

    const Category = sequelize.define (alias, cols, config);

    Category.associate = function (models){
        Category.hasMany(models.Products ,{
           as: "products",
           foreignKey: "id_category",
           timestamps: false
        })
    
    }

    return Category;
}