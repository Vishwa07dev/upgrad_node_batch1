
const auth = require("../middlwares/authjwt");
const ticketValidator  = require("../middlwares/ticket.middleware");
const ticketController = require("../controllers/ticket.controller");
module.exports = (app) => {

  /**
   * Creating a ticket
   * 
   * POST  /crm/api/v1/tickets
   */
   
  app.post("/crm/api/v1/tickets", [auth.verifyToken, ticketValidator.validateTicketReqBody],ticketController.createTicket);

  
}
