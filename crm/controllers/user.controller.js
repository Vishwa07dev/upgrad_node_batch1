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
        const users = await User.find({});

        res.status(200).send(objectConverter.userResponse(users));

    } catch (err) {
        console.log("Error while fetching the users ", err.message);

        res.status(500).send({
            message: "Internal server error while fetching the users"
        })
    }

}