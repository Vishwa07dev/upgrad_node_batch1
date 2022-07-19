/**
 * We are going to define the schema of student document
 * 
 * name , age
 */


const mongoose  = require("mongoose");


/**
 * Create the schema for the Student document
 */
const studentSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }, 
    age : {
        type : Number,
        min : 16
    },
    email : {
        type : String,
        required :true,
        unique : true,
        lowercase : true,
        minLength : 15
    },
    createdAt : {
        type : Date,
        //default : Date.now()
        default : () =>{
            return Date.now();
        },
        immutable : true
    },
    updatedAt : {
        type : Date,
        //default : Date.now()
        default : () =>{
            return Date.now();
        }
        
    }, 
    subjects : {
        type : [String],
        //custom validator
        validate : {
            validator : s => s.length != 0,
            message : props => "subject list can't be empty"
        }
    }
});

/**
 * Register this schema with the mongo collections and expose it to other files 
 */
module.exports = mongoose.model('Student', studentSchema );
