/**
 * This file will have the logic for the idea resource
 */
const ideas = require("../models/idea.model"); // This returns all the ideas as object

var count =2 ;//current number of ideas present

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

/**
 * Method to get the idea based on id
 * 
 * 127.0.0.1:8080/ideaApp/api/v1/idea/1
 */
exports.getIdeaBasedOnId = (req, res)=>{
    const ideaId = req.params.id;
    const idea = ideas[ideaId];
    res.status(200).send(idea);
}

/**
 * Method to create a new idea
 */
exports.createIdea = (req, res)=>{
  
    /**
     * I need to first read the JSON request body into JS Object
     */
    req.body.id = ++count ; //We are adding a id field to the request body
    
    ideas[count] = req.body;

    res.status(201).send(ideas[count]);

}

/**
 * Method to update an existing idea
 * 
 * PUT 127.0.0.1:8080/ideaApp/api/v1/ideas/1
 * 
 * Request body
 */
exports.updateIdea = (req, res)=>{
   const ideaId  = req.params.id ;

   const idea = ideas[ideaId];

   if(idea){
       ideas[ideaId] = req.body;
       res.status(200).send(ideas[ideaId]);
   }else{
       res.status(400).send({
           message : "Idea id passed is not valid"
       });
   }
}
