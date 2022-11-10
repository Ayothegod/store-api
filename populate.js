require("dotenv").config()
const connectDB = require('./db/connect.js')
const Product = require('./models/product.js')
const jsonProduct = require('./products.json')


const start = async () => {
    try {
        await connectDB()
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log("started server");
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()