const express = require('express')
const router =  express.Router()
const {handleStudentSignUP , handleStudentSignIN} = require('../controllers/student')

router
.post("/signup" , handleStudentSignUP)
.post('/signin' , handleStudentSignIN)

module.exports = router;