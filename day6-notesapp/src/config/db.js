const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log('db connected successfully');
        
    } catch (error) {
        console.log('error in db connection',error);
        
    }
}

module.exports = connectDb