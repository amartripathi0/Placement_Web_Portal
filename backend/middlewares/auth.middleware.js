const Student = require("../models/student");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const isSignedIn = (userType) =>
  asyncHandler(async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        res.status(401);
        throw new Error("Unauthorized User,Please Login");
      } else {
        const documentObjOfUser = jwt.verify(token, process.env.JWT_SECRET_KEY_STUDENT);
        if (!documentObjOfUser) {
          res.status(401);
          throw new Error("Unauthorized User,Please Login");
        } else {
          const userId = documentObjOfUser.id;
          if (userType === "Student") {
            user = await Student.findById(userId).select( 
              "-personalDetail.password"
            );
          } else if (userType === "Staff") {
            user = await Student.findById(userId).select(
              "-personalDetail.password"
            );
          } else if (userType === "Recruiter") {
            user = await Student.findById(userId).select(
              "-personalDetail.password"
            );
          }
          if (!user) {
            res.status(401);
            throw new Error("Unauthorized User,Please Login");
          }
          if(user.role === "suspended"){
            res.status(400);
            throw new Error("User suspended!! ");
          }

          req.user = user
          next()
        }
      }
    } catch (error) {
        res.status(401);
        throw new Error("Unauthorized User,Please Login");
    }
  });

module.exports = {
  isSignedIn,
};
