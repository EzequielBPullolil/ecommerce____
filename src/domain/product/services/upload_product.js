const { ProductModel } = require('src/infrastructure/sequelize/index')
const { v4: uuid } = require('uuid')
module.exports = async (productParams) => {
    const createdProduct = await ProductModel.create(productParams)
    return {
        productID: createdProduct.productID
    }
}