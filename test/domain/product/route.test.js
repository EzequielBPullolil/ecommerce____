const chai = require('chai')
    ,chaiHttp= require('chai-http')

chai.use(chaiHttp)
const {expect, request}= chai;

const app = require('src/app')

describe('Product route test', () => {
    let createProductID;
    it('POST (Upload product)', (done) => {
        request(app)
            .post('/products')
            .end((err,res)=>{
                if(err) done(err)

                expect(res).to.have.status(201);
                expect(res.body).to.have.property('productID')

                createProductID = res.body.productID
                done()
            })
    });
    describe('products/:id', () => {
        it('PUT (update product)', (done) => {
            request(app)
                .put(`/products/${createProductID}`)
                .end((err,res)=>{
                    if(err) done(err)

                    expect(res).to.have.status(200)
                    done()
                })
        });
    });
})





