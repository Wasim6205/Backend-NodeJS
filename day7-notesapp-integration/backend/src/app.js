const express = require("express")
const cors = require("cors")
const NotesModel = require("./models/notes.model")
const connectDb = require("./config/db")
const createNotesController = require("./controllers/notes.controller")
const notesRoute = require("./routes/notes.route")

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
}))

connectDb()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("ok got it")
})

app.use('/notes',notesRoute)

module.exports = app