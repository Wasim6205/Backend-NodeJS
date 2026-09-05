import express from "express";

import userRoutes from "../routes/auth.route.js"

const app = express()

app.use(express.json())

app.use('/api/auth',userRoutes)

export default app