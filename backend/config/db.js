const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn =  mongoose.connect(process.env.MONGO_URI,{
            // userNewUrlParser: true,
            useUnifiedTopology: true
            // userFindAndModify: true,
        });
        console.log("mongodb connected")
    } catch (error) {
        console.log("error"+error)
    }
}

module.exports = {connectDB}