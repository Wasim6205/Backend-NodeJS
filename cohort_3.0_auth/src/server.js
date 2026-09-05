import app from "./app/app.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
dotenv.config()

const port = process.env.PORT || 4000

await connectDB()

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
})