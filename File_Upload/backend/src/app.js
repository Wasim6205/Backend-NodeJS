const express = require("express")
const cors = require("cors")

const userRoutes = require("./routes/user.route")

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/user", userRoutes)

module.exports = app