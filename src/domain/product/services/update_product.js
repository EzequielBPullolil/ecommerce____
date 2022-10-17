const { ProductModel } = require('src/infrastructure/sequelize/index')
module.exports = async(ID, productParams)=>{
    /**
     * Finds a product by ID and update they params
     * 
     * @return UpdatedProduct
     * @param productParams object
     * @param ID uuid
     */
    const productToUpdate = await ProductModel.findByPk(ID)

    productToUpdate.update(productParams)
    productToUpdate.save();
    return productToUpdate;
}