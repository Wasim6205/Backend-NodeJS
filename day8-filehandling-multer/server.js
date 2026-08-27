require("dotenv").config()
const app = require("./src/app")

const port = process.env.port || 5000

app.get("/", (req,res) => {
    res.send("backend running successfully")
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})