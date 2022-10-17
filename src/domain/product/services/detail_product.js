const { ProductModel } = require('src/infrastructure/sequelize/index')
module.exports = async(ID)=>{
    /**
     * Finds one product BY ID and return it 
     * 
     * @param ID string
     * @return object
     */

    const {dataValues:product} = await ProductModel.findByPk(ID);

    return product;
}