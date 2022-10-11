const chai = require('chai')
    , chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)

const { expect } = chai

const UploadProduct = require('src/domain/product/services/upload_product')
describe('UploadProduct test', () => {
    const productSuject = {
        name: 'test'
    }
    it('UploadProduct was fullfilled', async () => {
        expect(UploadProduct(productSuject))
            .eventually
            .be
            .fulfilled;
    });


});
