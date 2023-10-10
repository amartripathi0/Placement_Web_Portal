const express = require('express');
const {handleStaffSignUP, handleStaffSignIn} = require('../controllers/college_staff')
const router = express.Router()

router
.post('/signup' , handleStaffSignUP)
.post('/signin' , handleStaffSignIn)

module.exports = router