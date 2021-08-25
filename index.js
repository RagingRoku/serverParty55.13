//bringing in HTTP package
let myhttp = require("http");

// making server
// and adding a function to execute
//when the server is made
let server = myhttp.createServer(
//runs when a request comes in
  function( request, response){
    console.log("was your URL: " + request.url + "?")
    let myMessage;
    if(request.url === "/sup"){
      myMessage = "Hello there!\n\nBy the way did you know the quick brown fox jumped over the lazy dog?";

    } else {
      myMessage = "Unknown guest detected!"

    } 


    //HTTP response header including status code (200, 400, 500, etc) 
    //and
    //content type
    response.writeHead(200, { "Content-Type": "text/plain"} );
  
    //end() returns data and closes reponse
    response.end(myMessage + "\n");
  }

);

//asking HTTP to listen on TCP port for 
//HTTP requests
//arguments: TCP port #
//String to listen on
server.listen(8080, "0.0.0.0");

console.log("server is active!");
