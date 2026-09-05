import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

export const register = async (req,res) => {
    try {
        const {username,email,password} = req.body
        if(!username || !email || !password){
            return res.status(400).json({
                message:"All fields are required"
            })
        }

        const userExist = await userModel.findOne({email})
        if(userExist){
            return res.status(400).json({
                message:"user already exists!"
            })
        }
        
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await userModel.create({
            username,
            email,
            password:hashedPassword
        })

        const token = jwt.sign({},print.env.JWT_SECRET)
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}