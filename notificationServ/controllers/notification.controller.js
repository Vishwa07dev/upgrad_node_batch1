const Notification = require("../models/notification.model");

/**
 * Method for accepting notification
 * 
 * Validation of the request body -- from Middleware | Assignemnt
 */
exports.acceptNotificationRequest = async (req, res) =>{

    /**
     * Accept the notification request and store inside the DB
     */

    try{

        const notificationObj = {
            
            subject : req.body.subject,
            recepientEmails : req.body.recepientEmails,
            content : req.body.content,
            requester : req.body.requester,
        }

        console.log(Notification);
        console.log(typeof Notification);
        const notification = await Notification.create(notificationObj);

        return res.status(201).send({
            message : "Notification request accepted",
            tackingId : notification._id
        })

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message : "Internal error while storing notification"
        })
    }
}