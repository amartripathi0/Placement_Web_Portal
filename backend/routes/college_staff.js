const express = require('express');
const {handleStaffSignUP, handleStaffSignIn, handleGetAllStudents} = require('../controllers/college_staff')
const router = express.Router()

router
.post('/signup' , handleStaffSignUP)
.post('/signin' , handleStaffSignIn)
.get('/students' , handleGetAllStudents)
module.exports = router