/**
 * We are going to create a  http server in Node.js
 */
const http = require('http');
const fs = require('fs');
const fsp = fs.promises; // Read the file asynchronously using promise


console.log("Hello world");



/**
 * I will use http to start the http server
 * 
 * 
 */
const server = http.createServer(async (req,res)=>{
    
     if(req.url == '/hello'){
         res.end("Hello from the server");
     }else if( req.url == '/welcome'){

        const msg = await fsp.readFile("./files/welcome.txt", "binary");

        returnResponse(res,msg);
        

          /**
           * Read from the file welcome.txt and return that as 
           * the response
           */
         
     }else{
         res.writeHead(500); // 500 - Internal server error
         res.end("Server doesn't how to react");
     }
     
});

/**
 * Bind the server to a port
 */
server.listen(3000,()=>{
     console.log("Node.js server started in port no : 3000");
})


function returnResponse( res, data){
    res.end(data);
}