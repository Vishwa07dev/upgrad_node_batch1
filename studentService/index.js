/**
 * Starting point of the application
 */

const express = require('express');

const app = express();

const bodyParser = require("body-parser");


/**
 * I would like to get the list of all the students
 * 
 * GET /studentApp/api/v1/students
 */

/**
 * In memory object of students
 */
const students = {
    1 : {
        vishwa : {
            name : "Vishwa",
            age : 16,
            subject : "Maths"
        },
        mohan : {
            name : "Mohan",
            age : 21,
            subject : "Maths"
        }
    },
    2 : {
        ravi : {
            name : "Ravi",
            age : 17,
            subject : "Maths"
        },
        shivani : {
            name : "Sohan",
            age : 21,
            subject : "Hindi"
        }
    }

}

app.get('/studentApp/api/v1/students' , (req , res)=>{
    console.log("Get all students API is called");
    console.log(req.query);
    if(req.query.class){
        return res.status(200).send(students[req.query.class]);
    }
    
    /**
     * Return all the presnt students as response
     */
    res.status(200).send(students);

});

/**
 * Create a new students
 *     create students for a class
 * 
 * POST  /studentApp/api/v1/classes/{classId}/students
 * 
 * Reqest body : 
 *   {
 *     "name" : "Tanmoy",
 *     "age" : 21,
 *     "subject" : "programming"
 *   }
 *    
 *    :paramName
 * 
 * /studentApp/api/v1/classes/123/students
 * 
 * classId = 123
 */
//app.use(express.json()); //inbuilt middleware
/**
 * Third party middleware for converting json to JS object
 */
app.use(bodyParser.json());
app.post("/studentApp/api/v1/classes/:classId/students", (req, res)=>{

    /**
     * I need to first read the class name from the path param
     */
    console.log(req.params) ;// returns the object containing all the params
    
    const className =  req.params.classId ;

    /**
     * I would like to read the request body
     */
    const studentBody = req.body ;
    (students[className])[req.body.name] = studentBody ;

    res.status(201).send(students[className]);
})



/**
 * Starting the server
 */
app.listen(7777,() =>{
    console.log("Server started");
})