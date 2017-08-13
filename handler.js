var querystring = require('querystring');

function home(response){
    console.log("Executing 'home' handler");
	var htmlFile = '<!DOCTYPE html>					<html>					<head>					<title>Page Title</title>					</head>					<body>					<form action ="/review" method="POST">						<textarea name ="text" rows ="20" cols="60"></textarea>						<br>						<input type="submit" value="Submit Text">					</form>					</body>					</html>';
	
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(htmlFile);
	response.end();
	
	}
function review(response, reviewData){
    console.log("Executing 'review' handler");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Your review is"+ querystring.parse(reviewData).text);
	response.end(); 
}


exports.home = home;
exports.review = review;
