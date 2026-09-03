import mongoose from "mongoose";
import config from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('Mongodb connected successfully'); 
    } catch (error) {
        console.log('db connection failed');
    }
}