const { Sequelize, DataTypes} = require('sequelize')
const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`)


const ProductModel = require('./models/product')(sequelize, DataTypes)



sequelize.sync()


module.exports = {
    sequelize,
    ProductModel
};