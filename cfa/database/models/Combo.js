module.exports = (sequelize, dataTypes) => {

    const alias = 'combo';
    const cols ={
        id:{
            types: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        name:{
            types: dataTypes.STRING(45),
            allowNull : false,
        },
        
    }
    const config ={
        tableName: 'combo',
        timestamps: false,
    }

    const Combo = sequelize.define(alias,cols,config);
    return Combo

}