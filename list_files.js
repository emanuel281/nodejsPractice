function list_files () {
	// body...
	var fs = require('fs');

	fs.readdir(process.argv[2], function (err, list) {
		// body...
		var ext = "." + process.argv[3];
		for(var i = 0; i < list.length; i++)
			if( (list[i].substr(list[i].length-(ext.length), list[i].length-1)) == ext)
				console.log(list[i]);
	});
}

list_files();
