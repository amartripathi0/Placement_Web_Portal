const express = require('express')

const app = express()

require("dotenv").config();
app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "UserTwo", "UserThree"] })

})

app.listen(5000, () => {
    console.log("Server started at 5000")
    console.log("Hello Jee")
})
console.log("Hello Jee")

const dbConnect = require("./Config/database")
dbConnect();