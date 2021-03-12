module.exports = (sequelize, dataTypes) => {

    const alias = 'Combos';
    const cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey: true,
            unique: true
        },
        name:{
            type: dataTypes.STRING(45),
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