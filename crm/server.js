/**
 * This shoudle be the starting point of the application
 */

const dbConfig = require("./configs/db.config");
const express = require("express");
const serverConfig = require("./configs/server.config");
const app = express();
const mongoose  = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/user.model");
const bcrypt = require("bcryptjs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));  // false  pure string

/**
 * I need to connec to the database
*/

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection ;

db.on('error' ,() => {
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("Connected to database");

    /**
     * Write the logic to clean and initialize the db
     */
    init();
})


async function init() {
    /**
     * Delete the User collection if it's already present
     */
     await User.collection.drop();


     /**
      * We should create one ADMIN user ready from the backend
      */
     
     const user = await User.create({
         name : "Vishwa",
         userId : "admin",
         password : bcrypt.hashSync("Welcome1",8),
         email : "kankvish@gmail.com",
         userType : "ADMIN"
     });
     console.log(user);
    
}

/**
 * Plugging in the routes
 */
require("./routes/auth.route")(app);


app.listen(serverConfig.PORT , () => {
    console.log("Server started on the port no : ",serverConfig.PORT );
})


