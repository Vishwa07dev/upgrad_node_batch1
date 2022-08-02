


/**
 * Controller method for creating tickets
 * 
 *    1. User is authenticated  --- Taken care by auth middleware
 *    2. Req body is validated -- Middlware
 *    3. Insert the ticket body
 */

const userModel = require("../models/user.model");
const ticketModel = require("../models/ticket.model");

exports.createTicket = async (req, res) => {

    try {
        //Create the ticketOject from the request body

        const reqObj = {
            title: req.body.title,
            ticketPriority: req.body.ticketPriority,
            description: req.body.description,
            status: req.body.status,
            reporter: req.userId //will be retrieved from the access token
        }

        /**
         * I need to assign one Engineer to this ticket 
         * 
         * Assignment :
         * Change the below code, to assign that Engineer, which has least num
         * of tickets assigned
         * 
         */
        const engineer = await userModel.findOne({
            userType: "ENGINEER",
            userStatus: "APPROVED"
        });
        if (engineer) {
            reqObj.assignee = engineer.userId;
        }

        const ticketCreated = await ticketModel.create(reqObj);

        if (ticketCreated) {

            /**
             * Need to update customer documents
             */
            const customer = await userModel.findOne({ userId: req.userId });

            customer.ticketsCreated.push(ticketCreated._id);

            await customer.save();

            /**
             * Update the Engineer document if assigned
             */
            if (engineer) {
                engineer.ticketAssigned.push(ticketCreated._id);
                await engineer.save();
            }

            res.status(201).send(ticketCreated);
        }
    } catch (err) {
        console.log("error while creating ticket ", err.message);
    }

}


/**
 * Method to fetch all the users
 * 
 * 
 */

exports.getTickets = (req,res)=>{

   /**
    * So that depending on the user, correct list of tickets are returned
    */

}
