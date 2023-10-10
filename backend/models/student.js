const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    personalDetail: {
        firstName: {  type: String,required: true  },
        lastName: {  type: String,required: true  },
        fathersName :{type : String ,  required: true},
        mothersName : {type : String ,  required: true},
        emailID : {type : String ,  required: true , unique : true},
        password:{type : String ,  required: true},
        phone : {type : Number , required:true , unique : true}
    },
    
    educationalDetails: {  
        collegeName:  {type : String ,  required: true},
        degree:  {type : String ,  required: true},
        cgpa: {type : String ,  required: true},
        yearOfPassing: Number
    },

    placementStatus: {
        isPlaced: {type: Boolean,default: false},
        companyName: String,
        packageOffered: Number
    },

    pastInternshipsProjects: {
        internships: [{
            company: String,
            role: String,
            duration: String,
            description: String
        }],
        projects: [{
            title: String,
            duration: String,
            description: String,
            link: String
        }]
    }
})

const Student = mongoose.model('Student' , studentSchema);
module.exports = Student; 