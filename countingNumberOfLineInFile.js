function readNumberLine(){

	var filesystem = require("fs");

	var raw = filesystem.readFileSync(process.argv[2]);

	var contents = raw.toString();

	var j = 0;

	var broken = contents.split('\n');
	console.log(broken.length - 1);
}

readNumberLine();
