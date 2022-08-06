const Client = require("node-rest-client").Client ;

const client = new Client();


module.exports = (subject, content, recepients, requester) => {
   /**
    * send a POST request to the notification server
    */

   /**
    * Request Body
    */

   const reqBody =  {
        subject : subject,
        recepientEmails: recepients,
        content: content,
        requester: requester
    }

   /**
    * Request Header
    */
   const reqHeader = {
       "Content-Type" : "application/json"
   }

   const args = {
       data : reqBody,
       headers : reqHeader
   }

   /**
    * Do the post call
    */
   client.post("http://localhost:8000/notiserv/api/v1/notifications", args, (data, res)=>{
       console.log("Request sent");
       console.log(data);
   })
}
