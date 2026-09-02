import express from "express"
import dotenv from "dotenv"
dotenv.config()

import postRoutes from "./routes/post.route.js"

const app = express()

app.use(express.json())

app.use("/api/post",postRoutes)

export default app