var http = require('http');
var url = require('url');

function startserver(route, handle){
    function onRequest(request, response){ 
	
	    var pathname = url.parse(request.url).pathname
		console.log("request received for " + pathname);
		
		var  reviewData ="";
		request.setEncoding("utf8"); 
		request.addListener("data",function(chunk) {
			reviewData += chunk;
		})
		request.addListener("end", function(){
			 route(handle,pathname,response,reviewData);
		}); 
		
		 //route(handle, pathname, response);
		
        //response.writeHead(200,{"Content-type" : "Text/plain"});
        //response.write("Hello from our application");
        //response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server started on localhost port 8888"); 
}
exports.startserver = startserver;
