/**
 * This file will be used to define the routes for the idea resource
 */
const ideadController = require("../controllers/idea.controller");

/**
 * Define a route for getting all the ideas
 */
module.exports = (app) => {
    /**
     * GET 127.0.0.1:8080/ideaApp/api/v1/ideas
     */
    app.get("/ideaApp/api/v1/ideas",ideadController.getIdeas);

    /**
     * GET 127.0.0.1:8080/ideaApp/api/v1/ideas/2
     */
     app.get("/ideaApp/api/v1/ideas/:id",ideadController.getIdeaBasedOnId);


    /**
     * POST 127.0.0.1:8080/ideaApp/api/v1/ideas
     */
     app.post("/ideaApp/api/v1/ideas",ideadController.createIdea);
    
    /**
     * PUT 127.0.0.1:8080/ideaApp/api/v1/ideas/1
     */
     app.put("/ideaApp/api/v1/ideas/:id",ideadController.updateIdea);

}