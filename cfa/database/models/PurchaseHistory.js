module.exports = (sequelize, dataTypes) => {

    const alias = 'purchase_history';
    const cols ={
        id:{
            types: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        id_user:{
            types: dataTypes.INTEGER,
            allowNull : false,
        },
        id_product:{
            types: dataTypes.INTEGER,
            allowNull : false,
            },
        price:{
                types: dataTypes.INTEGER,
                allowNull : false,
                },
        quantity:{
                    types: dataTypes.INTEGER,
                    allowNull : false,
                    },

    }
    const config ={
        tableName: 'purchase_history',
        timestamps: false,
    }

    const PurchaseHistory = sequelize.define(alias,cols,config);
    return PurchaseHistory

}