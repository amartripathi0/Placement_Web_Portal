const express = require('express')
require('dotenv').config()
const  connectToMongoDB = require('./connection')
const PORT = process.env.SERVER_PORT
const DATABASE_PASS = process.env.DATABASE_PASS

const studentRouter = require('./routes/student')
const staffRouter  = require('./routes/college_staff')
const app = express()
app.use(express.json())

// DataBase Connection 
const dbURL=  `mongodb+srv://amartripathi:${DATABASE_PASS}@cluster0.2kwytrq.mongodb.net/`
connectToMongoDB(dbURL )
.then(() => console.log("DB Connected"))
.catch(() => console.log("DB Connection Failed"))
 
app.use('/student' , studentRouter)
app.use('/staff' , staffRouter )
app.listen(PORT, ()=> console.log("server started at " , PORT))