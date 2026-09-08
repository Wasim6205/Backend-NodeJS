import app from "./app/app.js"
import config from "./config/config.js"
import connectDB from "./config/db.js"

const port = config.PORT || 4000

await connectDB()

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})