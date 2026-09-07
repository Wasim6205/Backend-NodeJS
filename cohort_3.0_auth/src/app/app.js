import express from "express";
import cookieParser from "cookie-parser"

import userRoutes from "../routes/auth.route.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',userRoutes)

export default app