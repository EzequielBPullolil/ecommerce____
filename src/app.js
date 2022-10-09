const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    return res.sendStatus(200)
})


//ROUTES
const productRouter = require('src/domain/product/route')
app.use('/products', productRouter)

module.exports = app;