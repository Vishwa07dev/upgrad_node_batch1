const express = require('express');
console.log(typeof express);  // function
const app = express();
console.log(typeof app);

app.get("/", (req, res)=>{
    res.status(200).send("hello Students");
})

app.get("/hello", (req, res)=>{
    res.status(200).send("Response for the hello request");
})


app.listen(7777, ()=>{
    console.log('Server has started on 7777');
})


console.log('Welcome students');

