const {ProductModel} = require('src/infrastructure/sequelize/index')
module.exports = async(productParams)=>{
    const createdProduct = await ProductModel.create(productParams)
        
    return {
        productID: createdProduct.productID
    }
}