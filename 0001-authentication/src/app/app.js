import express from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"
import {authenticate} from "../middleware/auth.middleware.js"
import dotenv from "dotenv"
dotenv.config()
import bcrypt from "bcryptjs"

const app = express()

app.use(express.json())

app.get("/api", (req,res) => {
    res.status(200).json({
        message: "Welcome to the authentication API"
    })
})

app.post("/api/auth/register", async (req,res) => {
    const {email, name, password} = req.body

    // Save Data to DB
    const user = await userModel.create({
        email,name,password: await bcrypt.hash(password,10)
    })

    const token = jwt.sign(
        {
        id: user._id
        },
        process.env.JWT_SECRET
    )

    res.status(201).json({
        message: "User created successfully",
        data: {
            user: {
                email,
                name,
                id:user._id
            },
            token
        }
    })

})

app.get("/api/auth/me", authenticate, async(req,res) => {
    try {
        console.log(req.user);

       res.status(200).json({
        data:{
            user:req.user
        }
       })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
})

app.post("/api/auth/login", async (req,res) => {
    const {email,password} = req.body

    const user = await userModel.findOne({email})

    const isValidPassword = await bcrypt.compare(password,user.password)

    if(!isValidPassword){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.status(200).json({
        message:"user loggedIn successfully",
        data:{
            user:{
                email:user.email,
                name:user.name
            }
        },
        token
    })
})

export default app