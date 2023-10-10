const express = require('express')
const router =  express.Router()
const {handleStudentSignUP} = require('../controllers/student')

router
.post("/signup" , handleStudentSignUP)

module.exports = router;