const productRouter = require('express').Router()

productRouter.post('/', (req,res)=>{
    return res.status(201).json({
            productID: 'abcdfgh'
    })
})


productRouter.route("/:id")
    .put((req,res)=>{
        return res.sendStatus(200)
    })

module.exports = productRouter;