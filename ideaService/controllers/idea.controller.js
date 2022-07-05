/**
 * This file will have the logic for the idea resource
 */
const ideas = require("../models/idea.model"); // This returns all the ideas as object


/**
 * Logic to get all ideas
 * Need to write a method, which take req, and res object and 
 * create ideas and return the response
 */
exports.getIdeas = (req, res)=> {
   /**
    * Logic to get all the idea
    */
   res.status(200).send(ideas);
}
