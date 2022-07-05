
const express = require('express');
const app = express();

app.get("/students", (req, res)=>{
    res.status(200).send({
        message : "Hello Students"
    });
});


app.post("/students", (req,res)=>{
    res.status(201).send({
        message : "Student created"
    });
});

app.all("/studs", (req, res)=>{
    res.status(200).send({
        message: "Handle all types of request"
    });
})


const cb1 = (req, res, next)=>{
    console.log("First callback");
    next();
}

const cb2 = (req, res, next)=>{
    console.log("second callback");
    next();
}

app.get("/movies", [cb1, cb2], (req, res)=>{
    console.log("Multiple handlers");
    res.status(201).send({
        message : "Movies"
    });
})



const studentRoute = require("./student.route");
app.use('/rootUri', studentRoute);




app.listen(8000,()=>{
    console.log("Server started on the port 8000");
})

