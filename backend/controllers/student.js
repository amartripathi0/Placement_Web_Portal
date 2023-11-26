const mongoose = require("mongoose");
const Student = require("../models/student");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/index");
const uploadToCloudinaryModule = require("../utils/index");
const handleStudentSignUP = asyncHandler(async (req, res) => {
  //get credential from body
  // First Name , Last Name , Email , phnono password confirm pass
  const { emailID, firstName, lastName, phone, password, cpass } = req.body;
  if (!emailID || !password) {
    res.status(401);
    throw new Error("Please fill up all the required fileds");
  }
  if (password.length < 6 || cpass.length < 6) {
    res.status(401);
    throw new Error(
      "Password must be at least 6 characters long. Please choose a stronger password."
    );
  }

  if (password !== cpass) {
    res.status(401);
    throw new Error(
      "Password and confirmation password do not match. Please ensure both passwords are the same."
    );
  }

  const existingStudent = await Student.findOne({
    $or: [
      { "personalDetail.emailID": emailID },
      { "personalDetail.phone": phone },
    ],
  });
  if (existingStudent) {
    res.status(409);
    throw new Error("Student Already Exists!");
  } else {
    let hashedPass = await bcrypt.hash(password, 10);
    // const updatedStudent = { ...data , personalDetail : { password : hashedPass , ...personalDetail} }
    const pass = hashedPass;

    let student = await Student.create({
      personalDetail: { emailID, firstName, lastName, phone, password: pass },
    });

    if (student) {
      const token = generateToken(student._id.toString());

      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), // 1 day
        sameSite: "none",
        secure: true,
        userType : "student"
      });

      res.status(201).json({ emailID, firstName, lastName, phone });
    } else {
      res.status(403);
      throw new Error("Invalid user data");
    }
  }
});

const handleStudentSignIN = asyncHandler(async (req, res) => {
  try {
    
  const { emailID, password } = req.body;
  if (!emailID || !password) {
    res.status(401);
    throw new Error("Please fill up all the required fileds");
  }

  const student = await Student.findOne({ "personalDetail.emailID": emailID });
  if (student) {
    console.log(student.personalDetail.password ,  password);
  
    let isValdid = await bcrypt.compare(
      password,
      student.personalDetail.password
    );

    if (isValdid) {
      const usrTyp = "STUDENT"
      const token = generateToken(student._id.toString(), usrTyp);
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), // 1 day
        sameSite: "none",
        secure: true,
      });

      res.cookie("userType"  , usrTyp , {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), // 1 day
        sameSite: "none",
        secure: true,
      } )
      res.status(201).json({ message: "Login Successfull" });
    } else {

      res.status(401);
      throw new Error("Invalid EmailID or Password");
    }
  } else {
    res.status(403);
    throw new Error("Student doesn't exists");
  }
} catch (error) {
    res.status(500)
    throw new Error("Internal Server Error")
}
});

const handleStudentSignOUT = asyncHandler(async (req, res) => {
  try {

  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), // 1 day
    sameSite: "none",
    secure: true,
  });
  res.status(201).json({ message: "signout successfull" });
} catch (error) {
  res.status(500)
  throw new Error("Internal Server Error")
}
});

const handleStudentProfileUpdate = asyncHandler(async (req, res) => {
  try{
    const data = req.body
    const personalDetail = req.user.personalDetail;
    if(!data){
        res.status(401);
    throw new Error("Unsufficent data");

    }
    else{
        // const user = await Student.updateOne({_id : req.user.id} , {$set : {"personalDetail" : data}})
        const user = await Student.findById(req.user.id);
        const userUpdate = await Student.updateOne({_id : req.user.id} , {$set : {"personalDetail" : {...personalDetail ,password : user.personalDetail.password , ...data}}})

        console.log(userUpdate); 
        // const user = await Student.findOneAndUpdate({_id : req.user.id} , {$set : {"personalDetail" : {...personalDetail , ...data}}}
        // , {returnDocument : "after"})
        
        if(user){
            res.json({message : "Details Updated Successfully"})
        }
        else{
            res.status(401);
            throw new Error("Details Update Failed");
        }

    }
  } catch (error) {
    res.status(500)
    throw new Error("Internal Server Error")
  }
});

const handleGetUserData = asyncHandler(async (req, res) => {
  try{
    // console.log(req.user);
    if(req.user){
        res.status(200).json({message: req.user})
    }
    else{
        res.status(403)
        throw new Error("No such user")
    }
  } catch (error) {
    res.status(500)
    throw new Error("Internal Server Error")
  }

});
 
const handleUploadResume = asyncHandler(async (req, res) => {
  try{
  const upload = await uploadToCloudinaryModule.cloudinary.uploader.upload(
    req.file.path,
    { folder: "Placement_Web_Portal/student/resume", resource_type: "image" }
  );
  const hey = await uploadToCloudinaryModule.cloudinary.image(req.file.path, {
    transformation: [{ page: 1 }],
  });

  const fname = req.body;

  if (!fname || !filename) {
    res.status(401).json({ status: 401, message: "fill all the data" });
  }
} catch (error) {
  res.status(500)
  throw new Error("Internal Server Error")
}
});

module.exports = {
  handleStudentSignUP,
  handleStudentSignIN,
  handleStudentSignOUT,
  handleStudentProfileUpdate,
  handleGetUserData,
  handleUploadResume,
};
