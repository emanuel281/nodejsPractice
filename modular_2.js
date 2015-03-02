var mymodule = require('./modular.js');

mymodule(process.argv[2], process.argv[3], function (err, fileNames) {

	if(err)return "oh, boy!";

	for (var i = 0; i < fileNames.length; i++) {
			console.log(fileNames[i]);
	};

});