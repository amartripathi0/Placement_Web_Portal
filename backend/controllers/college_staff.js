const mongoose = require('mongoose')
const Staff  = require('../models/college_staff')
const bcrypt = require('bcrypt')
const handleStaffSignUP = async (req , res) => {
        let data  =req.body
        const emailID = data.personalDetail.emailID;
        const phone = data.personalDetail.phone;
        const staffID = data.personalDetail.staffID;

        const existingStaff = await Staff.findOne({
            $or : [ {"personalDetail.emailID" : emailID} , {"personalDetail.phone" : phone} , {"personalDetail.staffID" : staffID} ]
        }) 
        if(existingStaff){
            res.json({msg : "Staff already exists"}) 
            return;
        } 
        else{
            const password = data.personalDetail.password;
            const passHash = await bcrypt.hash(password , 10 ) 
            data.personalDetail.password = passHash
            // const updatedStaff =   { personalDetail : { password : passHash ,  ...data.personalDetail}  , ...data }
            const staff = await Staff.create(data)
            res.json({"msg" : staff})  
        }  
}

async function handleStaffSignIn(req , res){
            const {emailID , password} = req.body
            const user = await Staff.findOne({"personalDetail.emailID" : emailID})
            console.log(password);  
            if(user){
                const passHash = user.personalDetail.password;
                const isValid = await bcrypt.compare(password , passHash)
                console.log(isValid);  
                if(isValid){
                    res.json({msg : "usr exists"})
                    return
                }
                else{
                    res.json({msg : "In valid Password"})
                    return 
                }
            }
            else{
                res.json({msg : "usr dsn't exists "})
                return
            }
           
}  
 

module.exports = {
    handleStaffSignUP,handleStaffSignIn
}   