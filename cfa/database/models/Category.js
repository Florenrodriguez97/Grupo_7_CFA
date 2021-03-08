module.exports = (sequelize, dataTypes) => {
    const alias = "Categoria",


    const cols = {
        id : {
            type : dataTypes.INTERGER(11).UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true
        },
        name : {
            type : dataTypes.VARCHAR(50).UNSIGNED
        },

    }


    const config = {
        tableName : 'Category',
        timestramps : false,
        underscored : false,
    }

    const Category = sewquelize.define (alias, cols, config );



    return Category;
}