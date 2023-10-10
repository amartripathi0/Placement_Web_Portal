const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    personalDetail : {
        firstName: {  type: String,required: true  },
        lastName: {  type: String,required: true  },
        emailID : {type : String ,  required: true , unique : true},
        password:{type : String ,  required: true},
        staffID : {type : Number  , required : true, unique : true},
        phone : {type : Number , required:true , unique : true}
    },
    designation : {
        type : String,
        enum : ["TPO Head" , "HOD" , "Placement Coordinator"],
        required : true
    } 
})

const Staff = mongoose.model("Staff" , staffSchema);

module.exports = Staff