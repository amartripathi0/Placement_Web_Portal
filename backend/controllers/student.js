const mongoose = require('mongoose')
const Student = require('../models/student');

async function handleStudentSignUP(req , res){
        const data = req.body
        const {personalDetail} = req.body;
        const email = personalDetail.emailID
        const pass = personalDetail.password
        console.log("d ",data);
        let user = await Student.create(data)
        res.json({msg  : user})
}
   
module.exports = {
    handleStudentSignUP
}
