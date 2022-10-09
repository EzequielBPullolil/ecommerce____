const chai = require('chai')
    ,chaiHttp= require('chai-http')

chai.use(chaiHttp)
const {expect, request}= chai;

const app = require('src/app')

describe('Product route test', () => {
    it('POST (Upload product)', (done) => {
        request(app)
            .post('/products')
            .end((err,res)=>{
                if(err) done(err)

                expect(res).to.have.status(201);
                done()
            })
    });
})





