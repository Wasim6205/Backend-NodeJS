import app from "./app/app.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import config from "./config/config.js"
dotenv.config()

const port = config.PORT || 5000

await connectDB()

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})