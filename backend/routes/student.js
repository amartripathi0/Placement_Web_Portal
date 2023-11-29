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
<<<<<<< HEAD
module.exports = router;
=======
.post('/uploadProfilePicture' , isSignedIn("Student") ,  uploadImg.single("profilePicture") , handleUploadProfilePicture)
module.exports = router; 
>>>>>>> ef95a7b (Auth pages of college and company added)
