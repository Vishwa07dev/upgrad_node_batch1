/**
 * This file will have the logic to signup and signin users
 */



/**
 * Create a function to allow the user to sign
 * 
 * Wheneve a user calls the endpoint :
 * 
 * POST /crm/api/v1/signup  , router should call the below method
 * JSON request body   to be available as JS object  
 * {
 *   
 *  }
 */

const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

exports.signup = async (req, res )=>{
    /**
     * Logic handle the signup
     */


    /**
     * First read the request body and create the JS object to be 
     * inserted in the DB
     */

try{
    const userObj = {
         name : req.body.name,
         userId : req.body.userId,
         email : req.body.email,
         userType : req.body.userType,
         password : bcrypt.hashSync(req.body.password , 8)
    }

    /**
     * I need to set the user status
     */
    if(!userObj.userType || userObj.userType == "CUSTOMER" ){
        userObj.userStatus = "APPROVED";
    }else{
        userObj.userStatus = "PENDING";
    }

    /**
     * Insert  the data in the databse
     */
    const savedUser  = await User.create(userObj);
    
    const postResponse = {
        name : savedUser.name,
        userId : savedUser.userId,
        email : savedUser.email,
        userType : savedUser.userType,
        userStatus : savedUser.userStatus,
        createdAt : savedUser.createdAt,
        updatedAt : savedUser.updatedAt
    }

    /**
     * Return the success response to the customer
     */
    res.status(201).send(postResponse);
}catch(err){
    console.log("Error while registering user ", err.message);
    res.status(500).send({
        message : "Some internal server error"
    })
}
}