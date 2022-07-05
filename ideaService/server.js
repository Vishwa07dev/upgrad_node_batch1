const express = require("express");
const app = express();


/**
 * Stitch the app with routes
 */
require("./routes/idea.routes")(app);

/**
 * Starting the server
 */
app.listen(8080,()=>{
    console.log("Started the server on the port no 8080");
})