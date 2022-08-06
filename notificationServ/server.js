const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const dbConfig = require("./configs/db.config");


/**
 * Initialize the connection to DB
 */
 mongoose.connect(dbConfig.DB_URL);

 const db = mongoose.connection ;
 
 db.on('error' ,() => {
     console.log("Error while connecting to DB");
 });
 
 db.once("open", ()=>{
     console.log("Connected to database");
 
 })

/**
 * Plug the routes to the server
 */
require("./routes/notification.routes")(app);

/**
 * Invoke the scheduler file / run /load
 */
require("./schedulers/email.scheduler");

/**
 * We need to go and start the server
 */
app.listen(8000, ()=>{
    console.log("Server has got started");
})
