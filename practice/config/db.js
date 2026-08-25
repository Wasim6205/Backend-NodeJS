import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connected');
    } catch (error) {
        console.log('db connection error');
    }
}

export default dbConnect