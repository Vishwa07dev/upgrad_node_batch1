/**
 * I will try to connect to the mongodb
 */

const mongoose = require('mongoose');


/**
 * Will make a connection to the DB
 */
mongoose.connect("mongodb://127.0.0.1/upgraddemodb" , ()=>{
    console.log("MongoDB got connected");
}, err =>{
    console.log("Error while connecting to MongoDB", err);
})

const Student = require("./models/student.model");

/**
 * DB operations
 */
async function dbOperations(){
    /**
     * I would like to add a new document
     */
 try{
    /** const student = await Student.create({
        name : "Vishwa",
        age :99,
        subjects : ["Maths"],
        email : "kankvish10@gmail.com"
    });
    const student1 = await Student.create({
        name : "Vishwa",
        age :77,
        subjects : ["English"],
        email : "kankvish1@gmail.com"
    });
    const studen2 = await Student.create({
        name : "Vishal",
        age :35,
        subjects : ["Maths"],
        email : "kankvish2@gmail.com"
    });
    const student3 = await Student.create({
        name : "Durgesh",
        age :91,
        subjects : ["CS"],
        email : "kankvish3@gmail.com"
    });
    const student4 = await Student.create({
        name : "Pooja",
        age :55,
        subjects : ["Node.js"],
        email : "kankvish4@gmail.com"
    });
    const student5 = await Student.create({
        name : "Somya",
        age :21,
        subjects : ["DSA"],
        email : "kankvish5@gmail.com"
    });
    console.log(student); **/

    
    /**
     * Searching the documents
     */

     //const student = await Student.findById("62d6c95c8324ccd26affc037");
     
     //const student = await Student.find({name : "Durgesh", age:91});

     const student = await Student.findOne({name : "Vishwa",age:91});
     console.log(student);
 




 }catch(err){
     console.log(err);
 }

}

dbOperations();