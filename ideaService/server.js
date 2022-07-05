const express = require("express");
const app = express();
/**
 * In-built middle for converton json to js object
 * and make it available as req.body
 */
app.use(express.json());
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