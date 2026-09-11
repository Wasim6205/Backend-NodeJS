import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3, 'Name must be at least 3 characters long'],
        maxLength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    passwordHash:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    }
})

const userModel = mongoose.model('users',userSchema)
export default userModel