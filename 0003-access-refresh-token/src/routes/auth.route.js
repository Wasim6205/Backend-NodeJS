import express from "express"
import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateTokens } from "../utils/auth.js"

const router = express.Router()

router.post('/register', async (req,res) => {
    try {
        const {name,email,password} = req.body

        const isUserExists = await userModel.findOne({email})
        if(isUserExists){
            return res.status(400).json({
                message:"User already exists",
                errors: [
                    {
                        path:"email",
                        message:"User already exists"
                    }
                ]
            })
        }

        const user = await userModel.create({
            name,
            email,
            passwordHash: await bcrypt.hash(password,10)
        })

        const {accessToken, refreshToken} = generateTokens({userId: user._id})

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
        })

        res.status(201).json({
            message:"user registered successfully",
            data:{
                user:{
                    email:user.name,
                    email:user.email
                }
            },
            accessToken
        })
        
    } catch (error) {
        
    }
})

export default router