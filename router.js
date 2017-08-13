function route(handle, pathname, response, reviewData){
	if(typeof handle[pathname] === 'function'){
		console.log("Routing a request for " + pathname);
        handle[pathname](response,reviewData);
    }else{
        console.log("No handler for " + pathname);
		response.writeHead(404,{"content-Type": "text/plain"}); 
		response.write("Error 404 page not found");
		response.end();
		
    }
}
exports.route = route;
