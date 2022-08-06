/**
 * This file will contain the sample logic to send the email
 */

const nodemailer = require("nodemailer");

/**
 * We need to configer the transporter for sending email
 */

const transporter  = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 465,
    auth : {
        user : "vish007dev@gmail.com",
        pass : 'vpphciilrvkzgmkq'
    },
    secure : true
});

/**
 * Write the code to send email
 */

const mailObj = {
    from : 'crm-no-reply@gmail.com',
    to : 'kankvish@gmail,kdurgesh137@gmail.com,mudigondasandeep01@gmail.com,hkulkarni927@gmail.com',
    subject : "Testing code - for sending email",
    text : "Sample text content of the email"
}

transporter.sendMail(mailObj , (err,data)=>{
    if(err){
        console.log(err.message);

    }else{
        console.log("Email was sent successfully");
    }
})