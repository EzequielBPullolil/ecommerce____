const productRouter = require('express').Router()

const UploadProduct = require('./services/upload_product')
const UpdateProduct = require('./services/update_product')
const DetailProduct = require('./services/detail_product')

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
    .put(async(req,res)=>{
        try{
            const {id} = req.params;
            const updatedProduct = await UpdateProduct(id, req.body);

            return res.status(200).json({
                status: 'product updated',
                product: updatedProduct
            })
        }catch(err){
            return res.status(400).json(err)
        }
        
    })
    .get(async(req,res)=>{
        try{
            const product = await DetailProduct(req.params.id)
            return res.status(200).json(product)
        }catch(err){
            return res.status(400).json(err)
        }
    })

module.exports = productRouter;