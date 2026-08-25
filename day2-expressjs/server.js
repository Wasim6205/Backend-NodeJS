const express = require("express")

const app = express()

// middleware for accepting data from frontend
app.use(express.json())

app.get("/", (req,res) => {
    res.send("ok got it")
})

app.get("/products",(req,res) => {
    res.send("products")
})

app.post('/create', (req,res) => {
    // create
    console.log(req.body);
    res.send("ok post")
})

let port = 3000

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})