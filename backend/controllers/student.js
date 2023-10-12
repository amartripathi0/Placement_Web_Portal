const mongoose = require('mongoose')
const Student = require('../models/student');
const bcrypt = require('bcrypt')

async function handleStudentSignUP(req , res){
        const data = req.body
        const {personalDetail} = req.body;
        const email = personalDetail.emailID
        const rollNumber = personalDetail.rollNumber
        const phone = personalDetail.phone

        const existingStudent = await Student.findOne( {
            $or : [ { "personalDetail.emailID" : email} , {"personalDetail.phone" : phone  }  , {"personalDetail.rollNumber" : rollNumber}]
        })
        console.log("d ",existingStudent);
        if(existingStudent){
            res.json({msg : "Student Already Exists"})
        }
        else{
            console.log(personalDetail.password);
            let hashedPass = await bcrypt.hash(personalDetail.password , 10)
            // console.log(hashedPass);
            // const updatedStudent = { ...data , personalDetail : { password : hashedPass , ...personalDetail} }
            personalDetail.password = hashedPass
            let user = await Student.create(data)
            res.json({msg  : "Student Created" , user})
        }
        
}
 
async function handleStudentSignIN(req , res){
    const {emailID , password} = req.body
    const student = await Student.findOne({"personalDetail.emailID" : emailID})
    if(student){
        console.log(student.personalDetail.password);
        let isValdid = await bcrypt.compare(password , student.personalDetail.password)
        if(isValdid){
            res.json({"msg" : "Login Successfull"})
            return
        }
        else{
            res.json({"msg" : "Invalid Password"})     
            return
        }
    }
    else{
        res.json({msg : "Student doesn't exists "})
    }
     
}
module.exports = {
    handleStudentSignUP , handleStudentSignIN
}
