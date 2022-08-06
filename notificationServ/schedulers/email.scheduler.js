/**
 * This file will contain the logic of the scheduler
 */

const cron = require("node-cron");
const emailTransporter  = require("../notifier/emailService");
const Notification = require("../models/notification.model");


/**
 * I want to print hello student every 5 seconds
 */
cron.schedule("*/5 * * * * *" , async () => {
    console.log("Inside the scheduler");
    
    /**
     *  Write the logic to send email
     */

    /**
     * Need to fetch all the notification document in the UN_SENT status
     */
    const notifications = await  Notification.find({status : "UN_SENT"});

    if(notifications){
        console.log("Number of un-sent requests are : ", notifications.length);

        /**
         * for each of these notifications, we need to send email
         */
         notifications.forEach( n => {
             const mailObj = {
                 to : n.recepientEmails,
                 subject : n.subject,
                 text : n.content
             }
             console.log("Send email for : ", mailObj);
             emailTransporter.sendMail(mailObj, async (err, info)=>{

                if(err){
                    console.log("Error in sending email ", e.message);
                }else{
                    console.log("Email was sent successfully");
                    /**
                     * I should change the notification statuts
                     */
                    n.status = "SENT";
                    await n.save();
                }

             })

         })
    }

})