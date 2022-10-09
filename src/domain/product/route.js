const productRouter = require('express').Router()

const UploadProduct = require('./services/upload_product')

productRouter.post('/', async (req,res)=>{
    try {
        const {productID} = await UploadProduct(req.body);
        return res.status(201).json({
            productID,
            status: 'product created'
        })
    }catch(err){
        console.error(err)
    }
    
})


productRouter.route("/:id")
    .put((req,res)=>{
        return res.sendStatus(200)
    })

module.exports = productRouter;