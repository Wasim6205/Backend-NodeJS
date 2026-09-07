import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

export const register = async (req,res) => {
    try {
        const {username,email,password} = req.body
        if(!username || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        const userExist = await userModel.findOne({email})
        if(userExist){
            return res.status(400).json({
                success:false,
                message:"user already exists!"
            })
        }
        
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await userModel.create({
            username,
            email,
            password:hashedPassword
        })

        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET)

        res.cookie("token",token)

        return res.status(201).json({
            success:true,
            message:"user is created",
            newUser,
            token
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}


export const login = async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"invalid email and password"
            })
        }

        const comparePassword = await bcrypt.compare(password,user.password)
        if(!comparePassword){
            return res.status(400).json({
                success:false,
                message:"invalid email and password"
            })
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

        return res.status(200).json({
            success:true,
            message:"user loggedin successfully",
            user,
            token
        })

    } catch (error) {
        console.log(error.message);
        
        return res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}