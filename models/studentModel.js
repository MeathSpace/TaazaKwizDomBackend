const mongoose = require("mongoose")
const moment = require('moment');

const studentSchema = mongoose.Schema({
    SchoolName: {
        type: String,
        // required: true
    },
    // requestedSchoolName:{
    //     type:String,
    //     default:"No Request"
    // },
    StudentName: {
        type: String,
        // required: true
    },
    // requestedName:{
    //     type:String,
    //     default:"No Request"
    // },
    DOB: {
        type: String,
        // set: function (dob) {
        //     // Parse the string date using Moment.js
        //     const date = moment(dob, 'DDMMYYYY').utcOffset(0) // Apply UTC offset to prevent timezone adjustment
        //         .hours(0) // Set the hours to 0 to avoid any time discrepancies
        //         .minutes(0) // Set the minutes to 0
        //         .seconds(0) // Set the seconds to 0
        //         .milliseconds(0) // Set the milliseconds to 0.toDate();
        //         .toDate();
        //     return date;
        // },
        // required: true
    },
    Class: {
        type: Number,
        default: 0
    },
    // Section:{
    //     type:String,
    //     required:true
    // },
    PhoneNumber: {
        type: Number,
        default: 0
    },
    Marks: {
        type: Number,
        default: 0
    },
    // isChanged:{
    //     type:Boolean,
    //     default:false
    // },
    Grade: {
        type: String,
        default: "OMR Incomplete"
    }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;