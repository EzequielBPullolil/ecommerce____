const chai = require('chai')
    , chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)

const { expect } = chai
//
const { QueryTypes } = require('sequelize');
const {sequelize} = require('src/infrastructure/sequelize/index')
const UploadProduct = require('src/domain/product/services/upload_product')
describe('UploadProduct test', () => {
    before(async()=>{
        await sequelize.query('delete from products')
    })
    const productSuject = {
        name: 'test'
    }
    it('UploadProduct was fullfilled', async () => {
        return expect(UploadProduct(productSuject))
            .eventually
            .be
            .fulfilled;
    });

    it('Product was persisted', async() => {
        /**
         * Makes unmodel query and verify if 
         * they response with the uploaded product before 
         */
        return expect(sequelize.query(`select 1 from products where name='${productSuject.name}'`, { type: QueryTypes.SELECT }))
            .to
            .eventually
            .have
            .property('length')
            .equal(1)
    });
});
