function http_get () {
	// body...
	var HTTP = require('http');
	var res = null;
	var mydata = null;

	HTTP.get(process.argv[2], function (respone) {
		// body...
		respone.on("data", function(data){
		mydata = data;
	});
	});

	

}

http_get();
