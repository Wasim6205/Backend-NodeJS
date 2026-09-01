import express from "express"
import jwt from "jsonwebtoken"

const app = express()

app.use(express.json())

app.get("/api", (req,res) => {
    res.status(200).json({
        message: "Welcome to the authentication API"
    })
})

app.post("/api/auth/register", (req,res) => {
    const {email, name, password} = req.body

    // Save Data to DB

    const token = jwt.sign(
        {
        email, name
        },
        "nIWp7yMLW3TO9DjeLx4WkUXpmgml3SleYDiBuPU95Dh"
    )

    res.status(201).json({
        message: "User created successfully",
        data: {
            user: {
                email, name
            },
            token
        }
    })

})

export default app