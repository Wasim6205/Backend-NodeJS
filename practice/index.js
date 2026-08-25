import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './config/db.js'
import User from './models/user.model.js'

const app = express()
const port = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.send("Hello World")
})

app.get('/register', (req,res) => {
    res.render("index")
})

app.post('/register', async (req,res) => {
    const {name, email, password} = req.body
    const user = await User.create({
        name,
        email,
        password
    })
    res.send(user)
})

app.listen(port,() => {
    dbConnect()
    console.log(`server is running at port ${port}`);
})