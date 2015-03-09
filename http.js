function main(url, callback){
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	console.log(req.status, req.statusText);
	console.log(req.getResponseHeader("content-type"));
	req.addEventListener("load", function(){
		if(req.status < 400)
			callback(req.responseText)
	});
	req.send(null);
	console.log(req.requstText);
};

try{
	main("http://localhost:8000", function(text){
		if(text != "expected")
			throw new Error("That was unexpected");
	});
}
catch(e){
	console.log("Hello from the catch block");
}
