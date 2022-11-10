const express = require('express')
const app = express()
const dotenv = require('dotenv')
const notFound = require('./middleware/not-found.js')
const errorHandler = require('./middleware/error-handler.js')
const connectDB = require('./db/connect.js')
const productRouter = require('./routes/products.js')
require('express-async-errors')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config()

//home route
app.get('/',(req,res) => {
    res.status(200).send(`<h1>Store Api</h1><a href="/api/v1/products">Products route</a>`)
})

//products route
app.use('/api/v1/products',productRouter)

//middleares
app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB()
        const port = process.env.PORT || 3001
        app.listen(port, () => console.log(`server running on localhost ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start()