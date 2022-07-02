const express  = require("express");
const app = express();


app.use(TotalRequestsSoFar);
app.use(warningMessage);

/**
 * Request logger
 */
 let count = 0;
function TotalRequestsSoFar(request, response, next){
    count++;
    response.status(200).send('Total requests received : '+count+" till time "+Date.now());
    next();
}

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