const express = require("express")
const fileRoute = require("./routes/file.route")

const app = express()

app.use(express.json())

app.use('/file', fileRoute)

module.exports = app