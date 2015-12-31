var http = require("http");
var fs = require('fs');
var url = require('url');
var path = require('path');

// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");

   var extname = path.extname(request.url);
   var img = false;

	var contentType = 'text/html';
    	switch (extname) {
    		case '.js':
        	contentType = 'text/javascript';
        	break;
    	case '.css':
        	contentType = 'text/css';
        	break; 
        case ".png" :     
        	contentType = 'image/png';
        	img = true;
        	break; 
        case ".jpg" :     
        	contentType = 'image/jpg';
        	img = true;
        	break; 
        case ".woff": 
        	
        	contentType  = "text/plain" 	;
        	break;
        case ".woff2": 
        	
        	contentType  = "text/plain" 	;
        	break;
        case ".ttf":
         	console.log("tff");
        	
        	contentType  = "text/plain"	;
        	break;
        case ".eot":
        	
        	 	contentType  = "text/plain"	;
        	break;
        case ".eot":
        	
        	 	contentType  = "text/plain"	;
        	break;
        case ".otf":
        	
   	contentType  = "text/plain"	;
        	break;
    }
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': contentType});
      }else{	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': contentType});	
         
         // Write the content of the file to response body         
         if(!img){
        	 response.write(data.toString());		
     	}else{
     		 response.write(data);		
     	}
      }
      // Send the response body 
      response.end();
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');