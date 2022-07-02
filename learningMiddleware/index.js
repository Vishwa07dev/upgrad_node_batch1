const express  = require("express");
const app = express();


/**
 * I want express to use the middleware
 */
app.use(requestTimeLogger); // We are plugging middleware with the express
app.use(warningMessage);

/**
 * Custom defined middleware
 */
function warningMessage(req, res, next){
    return res.status(200).send({
        message : "Requested REST Endpoint is in progress. Please try after 1 day"
    });
}
/**
 * Request logger
 */
function requestTimeLogger(req, res, next){
    console.log("Req came at : "+ Date.now());
    next();
}

/**
 * Starting the server
 */
app.listen(7777,()=>{
    console.log("Server started on the port 7777");
})