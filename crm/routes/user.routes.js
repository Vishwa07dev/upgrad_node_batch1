/**
 * This will be the routes files for the user resource
 */

const userController = require("../controllers/user.controller");
const auth = require("../middlwares/authjwt");
module.exports = (app) => {


    /**
     *  GET  /crm/api/v1/users   -> user controller , findAll method should be called
     * 
     *  We are going to patch chained middleware between route and controller
     */
    app.get("/crm/api/v1/users", [auth.verifyToken, auth.isAdmin] , userController.findAll);
}