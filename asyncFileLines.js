function coutingStars () {
	// body...
	var fs = require('fs');
	var myString = undefined;
	fs.readFile(process.argv[2], function(err, stringSam){
		console.log(stringSam.toString().split('\n').length -1);
	});

};

coutingStars();