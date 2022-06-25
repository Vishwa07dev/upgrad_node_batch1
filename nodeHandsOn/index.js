/**
 * We are going to create a  http server in Node.js
 */
const http = require('http');


console.log("Hello world");


/**
 * I will use http to start the http server
 * 
 * 
 */
const server = http.createServer((req, res)=>{
    
     if(req.url == '/hello'){
         res.end("Hello from the server");
     }else if( req.url == '/welcome'){
         res.end("Welcome from the server");
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