require("dotenv").config()
const app = require("./src/app")

const port = process.env.port || 5000

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})