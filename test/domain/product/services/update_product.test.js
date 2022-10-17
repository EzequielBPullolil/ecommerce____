const chai = require('chai')
    ,chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const {expect} = chai;
const { QueryTypes } = require('sequelize');
const {sequelize} = require('src/infrastructure/sequelize/index');
const UpdateProduct = require('src/domain/product/services/update_product')
describe('Update product', () => {
    let createdProduct = {};
    const newProductFields= {
        name:'new name',
        description:'new description'
    }
    before(async()=>{
        createdProduct.ID = 'ID'
        createdProduct.name = 'test_name'
        createdProduct.description = 'test_description'
        await sequelize.query(
            `INSERT INTO products ("ID", name, description)
             VALUES('${createdProduct.ID}', '${createdProduct.name}', '${createdProduct.description}')`
        )
    })

    it('UpdateProduct', async() => {
        const updatedProduct = await UpdateProduct(createdProduct.ID, newProductFields);
        expect(updatedProduct)
            .to
            .have
            .property('name')
            .equal(newProductFields.name)
        return expect(updatedProduct)
            .to
            .have
            .property('description')
            .equal(newProductFields.description)
    });
    it('Product updated', async() => {
        const [updatedProduct] = await sequelize.query(`select * from products where "ID"='${createdProduct.ID}'`, { type: QueryTypes.SELECT })
        console.log(updatedProduct)
        expect(updatedProduct)
            .to
            .have
            .property('name')
            .equal(newProductFields.name)
        return expect(updatedProduct)
            .to
            .have
            .property('description')
            .equal(newProductFields.description)
    });
});