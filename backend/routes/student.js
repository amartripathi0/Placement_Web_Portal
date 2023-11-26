const express = require('express')
const router =  express.Router()
const {handleStudentSignUP , handleStudentSignIN, handleStudentSignOUT, handleUploadResume, handleStudentProfileUpdate , handleGetUserData} = require('../controllers/student');
const { uploadPdf } = require('../middlewares/fileUploadMiddlware');
const { isSignedIn} = require('../middlewares/auth.middleware')
router
.post("/signup" , handleStudentSignUP)
.post('/signin' , handleStudentSignIN)
.post('/signout', handleStudentSignOUT)
.put('/updateProfileDetail' , isSignedIn("Student") , handleStudentProfileUpdate)
.get('/getUserData' , isSignedIn("Student") , handleGetUserData)
.post('/uploadResume' , uploadPdf.single("resume") , handleUploadResume)
module.exports = router;