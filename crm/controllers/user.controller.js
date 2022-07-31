/**
  * This file will contain the logic to fetch all users
  * 
  *  1. Is a valid user
  *  2. He should be admin
  * 
  * Above validation should be done as the part of middlware
  * 
 */
const User = require("../models/user.model");
const objectConverter = require("../utils/objectConverter");

exports.findAll = async (req, res) => {

    try {

         /**
          * Read the query params if any
          */

        const queryObj = {};

        const userTypeQ = req.query.userType ;
        if(userTypeQ){
            queryObj.userType = userTypeQ;
        }

        const userStatusQ = req.query.userStatus ;
        if(userStatusQ){
            queryObj.userStatus = userStatusQ ;
        }

        const users = await User.find(queryObj);

        res.status(200).send(objectConverter.userResponse(users));

    } catch (err) {
        console.log("Error while fetching the users ", err.message);

        res.status(500).send({
            message: "Internal server error while fetching the users"
        })
    }

}