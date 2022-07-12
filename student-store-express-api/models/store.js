const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/errors")
//  List all products currently in the db.json file
//  Fetch a single product by its id
//  Create a purchase order
class Store {
    static async listProducts() {
        // list all products currently in the db.json file
        const products = storage.get("products").orderBy("id","asc")
        return products
    }
    static async fetchProduct(productId) {
        // fetch a single product by its id
        const product = storage
            .get("products")
            .find({ id : productId})
            .value()
        return product
    }

    static async fetchPurchases() {
        const purchases = storage.get("purchases").value();
        return purchases;
    }
    // static async productPrice(productId) {
    //     const product = storage.get("products").find({id: Number(productId)}).value();
    //     return product;
    // }
    static async createPurchase(shoppingCart, user) {
        if (!user.name || !user.email || !shoppingCart) {
            throw new BadRequestError("user fields or shopping cart are missing")
        }
        const createdAt = new Date().toISOString()
        let totalCost = 0;
        const purchases = await Store.fetchPurchases();
        const purchaseId = purchases.length + 1
        // const receipt = {user: user, items:[]}
        let items = []
        shoppingCart.map((item)=> {
           
            totalCost += ((storage.get("products").find({id:item.id}).value().price)*item.quantity)
            items.push(item.id)
        })
        console.log(totalCost)
        let taxes = totalCost * 0.0875
        totalCost = taxes+totalCost
        totalCost = totalCost.toFixed(2)
        console.log(totalCost)
        let newPurchase = {id:purchaseId, name: user.name, email: user.email, order: shoppingCart, total: totalCost, createdAt: createdAt};
        storage.get("purchases").push(newPurchase).write();
        return newPurchase;

    }
}
module.exports = Store;