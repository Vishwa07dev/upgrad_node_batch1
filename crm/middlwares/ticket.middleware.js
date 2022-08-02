

const validateTicketReqBody = (req, res, next) => {

    if (!req.body.title) {
        return res.status(400).send({
            message: "Title of the ticket is missing"
        })
    }

    if (!req.body.description) {
        return res.status(400).send({
            message: "Description of the ticket is missing"
        });
    }

    if(req.body.status != undefined){
        if(!(["OPEN", "IN_PROGRESS", "CLOSED"].includes(req.body.status))){
            return res.status(400).send({
                message : "Not a valid status"
            })
        }
    }

    next();


}

const isEligibleToUpdate = (req, res , next ) =>{
    /**
     * Write the logic to check if the calling user is eligible to
     * update the ticket.
     */
}

module.exports = {
    validateTicketReqBody: validateTicketReqBody
    
}