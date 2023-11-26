const express = require('express')
require('dotenv').config()
const connectToMongoDB = require('./connection')
const PORT = process.env.SERVER_PORT
const DATABASE_PASS = process.env.DATABASE_PASS
const errorHandler  = require('./middlewares/errorHandlerMiddleware')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const studentRouter = require('./routes/student')
const staffRouter  = require('./routes/college_staff')
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const app = express()
app.use(express.json())
app.use(cookieParser());

app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
    // origin : "http://localhost:3000"
}))
app.use(express.urlencoded());


// DataBase Connection 
const dbURL=  `mongodb+srv://amartripathi:${DATABASE_PASS}@cluster0.2kwytrq.mongodb.net/database`
connectToMongoDB(dbURL)
.then(() => {
    console.log("DB Connected") 
    app.listen(PORT, ()=> console.log("server started at " , PORT))  
})
.catch(() => console.log("DB Connection Failed"))

// routes
app.get('/' , asyncHandler( async = ( req , res) => {
    try{
        const token = req.cookies.token
        const userType = req.cookies.userType
        
        if(token){
            res.status(200)
            res.send(userType)
        }
        else{
            res.status(200)
            res.send(false)
        }
        
    }
    catch(error){
        throw new Error("Internal Server Error")
    }
  
 
}))

app.use('/student' , studentRouter)
app.use('/staff' , staffRouter )

//at the end
app.use(errorHandler)

