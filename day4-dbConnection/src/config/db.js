const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://wasimbhai6205_db_user:cohort12345@cohort-cluster.tzuqftb.mongodb.net/`)
        console.log('mongodb connected');
    } catch (error) {
        console.log('error while connecting db', error);  
    }
}

module.exports = connectDb