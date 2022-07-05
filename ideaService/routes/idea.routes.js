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
}