import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('MongoDB connected');
    } catch (error) {
        console.log('db connection error');
    }
}

export default connectDB