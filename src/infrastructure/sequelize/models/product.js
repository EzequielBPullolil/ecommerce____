const e = require("express")

module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('products',{
        productID: {
            type: DataTypes.STRING
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