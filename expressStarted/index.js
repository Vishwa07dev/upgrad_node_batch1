/**
 * This can be used as the starting file
 */

const express = require('express');

console.log(typeof express);  // function

const app = express();

console.log(typeof app);

/**
 * app is the core of the whole express applications
 * 
 * Everything will revolve around app.
 */

/**
 * Accepting the client request
 */
app.get("/", (req, res)=>{
    res.status(200).send("hello Students");
})


/**
 * Starting a server
 */
app.listen(7777, ()=>{
    console.log('Server has started on 7777');
})