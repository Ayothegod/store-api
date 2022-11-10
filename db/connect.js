const mongoose = require('mongoose')

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI)
  console.log("database is running")
}


module.exports = connectDB
