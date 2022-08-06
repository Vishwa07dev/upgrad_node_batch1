/**
 * This file will have the logic to send email
 */


/**
 * This file will contain the sample logic to send the email
 */

 const nodemailer = require("nodemailer");

 /**
  * We need to configer the transporter for sending email
  */
 
module.exports  = nodemailer.createTransport({
     host : "smtp.gmail.com",
     port : 465,
     auth : {
         user : "vish007dev@gmail.com",
         pass : 'vpphciilrvkzgmkq'
     },
     secure : true
 });
 
 