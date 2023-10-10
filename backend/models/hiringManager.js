const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HiringManagerSchema = new Schema({
    personalDetal : {
        firstName: {  type: String,required: true  },
        lastName: {  type: String,required: true  },
        emailID : {type : String ,  required: true , unique : true},
        password:{type : String ,  required: true},
        staffID : {type : Number  , required : true, unique : true},
        phone : {type : Nuimber , required:true , unique : true}
    },

    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        default: 'Hiring Manager'
    },
    
    vacancies: [{
        role: String,
        description: String,
        qualifications: [String],
        startDate: Date,
        applicationDeadline: Date,
        status: {
            type: String,
            enum: ['Open', 'Closed'],
            default: 'Open'
        }
    }],
})
const HiringManager = mongoose.model('HiringManager', HiringManagerSchema);

module.exports = HiringManager;