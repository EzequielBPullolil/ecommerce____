const {v4: uuid} = require('uuid')
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('products',{
        ID: {
            type: DataTypes.STRING,
            defaultValue: uuid(),
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.INTEGER
        },
        description:{
            type: DataTypes.TEXT
        }
    },{
        timestamps: false
    })
    return product;
}