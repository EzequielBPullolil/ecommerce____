const productRouter = require('express').Router()

productRouter.post('/', (req,res)=>{
    return res.sendStatus(201)
})


module.exports = productRouter;