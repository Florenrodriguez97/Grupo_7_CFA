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

    Combo.associate = function(models) {
        Combo.belongsTo(models.productCombo , {
            as:"productCombo",
            foreignKey: "id_combo",
        }) 
    }
    return Combo

}