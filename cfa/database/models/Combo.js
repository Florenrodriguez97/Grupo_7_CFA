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
    
    Combo.associate = function (models){
        Combo.belongsToMany(models.Products ,{
           as: "pcarmadas",
           through: "combo", //nombre de la tabla
           foreignKey: "id_combo",
           otherKey: "id_product",
           timestamps: false
        })
    
    }
    
    return Combo

}