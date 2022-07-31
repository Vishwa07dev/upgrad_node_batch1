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

        const userTypeQ = req.query.userType;
        if (userTypeQ) {
            queryObj.userType = userTypeQ;
        }

        const userStatusQ = req.query.userStatus;
        if (userStatusQ) {
            queryObj.userStatus = userStatusQ;
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

/**
 * Controller method to update the user record
 * 
 * 1. Only ADMIN and the owner should be allowed to update the record
 * 
 *     -- This has to be done in the middleware [ Written ]
 */
exports.update = async (req, res) => {


    try {
        /**
         * Fetch the User object if it's present
         */
        const user = await User.findOne({ userId: req.params.id });

        if(!user){
            return res.status(404).send({
                message : "user with the given id to be updated is not found"
            })
        }

        /**
         * Update the user object based on the request
         */
        user.name = req.body.name != undefined ? req.body.name : user.name;

        user.userStatus = req.body.userStatus != undefined ? req.body.userStatus : user.userStatus;

        user.userType = req.body.userType != undefined ? req.body.userType : user.userType;

        /**
         * Save the user object and return the updated object
         */
        const updatedUser = await user.save();

        res.status(200).send({
            name: updatedUser.name,
            userId : updatedUser.userId,
            userStatus : updatedUser.userStatus,
            email: updatedUser.email,
            userType: updatedUser.userType
        })

    } catch (err) {
        console.log("Error while update the user ", err.message);
        res.status(500).send({
            message: "Internal Server error while updating the record"
        })
    }
}