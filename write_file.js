function write_file () {
	// body...
	var fs = require('fs');

	var text = "What's somebody like you doing in a place like this?\nDid you come alone or did you bring all your friends?\n'Cause I'll never be the same if we ever meet again.\n";
	
	fs.writeFile('write_file.txt', text);
	console.log("Written to file 'write_file.txt'");
};

write_file();