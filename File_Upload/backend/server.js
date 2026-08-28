const app = require("./src/app")

const port = 3002

app.listen(port, () => {
    console.log(`server running on ${port}`)
})