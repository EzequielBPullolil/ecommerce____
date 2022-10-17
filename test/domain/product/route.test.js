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
            const newProductFields = {
                name: 'new product name',
                description: 'an updatedProduct in route test',
                price: 10000000000
            }
            request(app)
                .put(`/products/${createProductID}`)
                .send(newProductFields)
                .end((err,res)=>{
                    if(err) done(err)

                    expect(res).to.have.status(200)
                    expect(res.body).to.have.property('product')
                    expect(res.body).to.have.property('status').equal('product updated')
                    done()
                })
        });
        it('GET (detail product)', (done) => {
            request(app)
                .get(`/products/${createProductID}`)
                .end((err,res)=>{
                    if(err) done(err)

                    expect(res).to.have.status(200)
                    expect(res.body).to.have.property('name')
                    expect(res.body).to.have.property('description')
                    expect(res.body).to.have.property('price')
                    expect(res.body).to.have.property('ID')
                    done()
                })
        });
    });
})





