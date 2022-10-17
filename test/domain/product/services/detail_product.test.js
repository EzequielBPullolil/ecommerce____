const chai = require('chai')
    ,chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const {expect} = chai;
const { QueryTypes } = require('sequelize');
const {sequelize} = require('src/infrastructure/sequelize/index');
const DetailProduct = require('src/domain/product/services/detail_product')
describe('Detail product test', () => {
    let createdProduct = {};
    before(async()=>{
        createdProduct.ID = 'detail_id_product'
        createdProduct.name = 'test_name'
        createdProduct.description = 'test_description'
        await sequelize.query(
            `INSERT INTO products ("ID", name, description)
             VALUES('${createdProduct.ID}', '${createdProduct.name}', '${createdProduct.description}')`
        )
    })

    it('DetailProduct ', async() => {
        return expect(DetailProduct(createdProduct.ID))
            .to
            .eventually
            .have
            .property('name').equal(createdProduct.name)
    });
})