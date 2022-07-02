const express  = require('express');

const app = express();

/**
 * Middleware applied at the application level
 */
app.use(function(req,res,next){
    console.log("Request received at "+ Date.now());
    next();
});


/**
 * Middleware applied at the route level
 */
app.use('/students', function(req, res, next){
    console.log("Route level middleware");
    next();
});

app.use((req,res, next)=>{
    res.status(200).send({
        message : "App is under processing"    
    });
});





app.listen(7777, ()=>{
    console.log("Server started on port num 7777");
})
