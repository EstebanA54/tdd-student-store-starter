const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const bodyParser = require('body-parser'); 

router.use(bodyParser.json())

// list all products
router.get("/", async(req, res, next) => {
    try {
    const products = await Store.listProducts()
    res.status(200).json({ "products": products })  
    } catch (err) {
        next(err)
    }
})

// get a single product by id
router.get("/:productId", async(req,res,next) => {
    const productId = Number(req.params.productId)
    const product = await Store.fetchProduct(productId)
    res.status(200).json({ "product": product })
})

router.post("/",async (req,res,next) => {
    try {
        const user = req.body.user
        const shoppingCart = req.body.shoppingCart
        const purchase = await Store.createPurchase(shoppingCart, user)
        res.status(201).json({ purchase })
    } catch (err) {
        next(err)
    }
})

module.exports = router;