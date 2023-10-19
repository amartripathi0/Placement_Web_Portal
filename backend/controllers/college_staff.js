const mongoose = require('mongoose')
const Staff = require('../models/college_staff')
const Student = require('../models/student')
const bcrypt = require('bcrypt')
const handleStaffSignUP = async (req, res) => {
    let data = req.body
    const emailID = data.personalDetail.emailID;
    const phone = data.personalDetail.phone;
    const staffID = data.personalDetail.staffID;

    const existingStaff = await Staff.findOne({
        $or: [{ "personalDetail.emailID": emailID }, { "personalDetail.phone": phone }, { "personalDetail.staffID": staffID }]
    })
    if (existingStaff) {
        res.json({ msg: "Staff already exists" })
        return;
    }
    else {
        const password = data.personalDetail.password;
        const passHash = await bcrypt.hash(password, 10)
        data.personalDetail.password = passHash
        // const updatedStaff =   { personalDetail : { password : passHash ,  ...data.personalDetail}  , ...data }
        const staff = await Staff.create(data)
        res.json({ "msg": staff })
    }
}

async function handleStaffSignIn(req, res) {
    const { emailID, password } = req.body
    const staff = await Staff.findOne({ "personalDetail.emailID": emailID })
    console.log(password);
    if (staff) {
        const passHash = staff.personalDetail.password;
        const isValid = await bcrypt.compare(password, passHash)
        console.log(isValid);
        if (isValid) {
            res.json({ msg: "Sigin Successfull" })
            return
        }
        else {
            res.json({ msg: "In valid Password" })
            return
        }
    }
    else {
        res.json({ msg: "Staff doesn't exists " })
        return
    }

}

async function handleGetAllStudents(req, res) {
    const students = await Student.find()
    if (!students) {
        res.json({ msg: "No Student Exist" })
        return
    }
    res.json({ students: students })
}

module.exports = {
    handleStaffSignUP, handleStaffSignIn, handleGetAllStudents
}   