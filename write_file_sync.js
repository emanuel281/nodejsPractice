function write_file_sync () {
	// body...
	var fs = require('fs');

	var text = "I am not a murderer I just like to be... Be...\nThere is a hand guiding a river...\nA river to wide open sea.\n";

	console.log("writing to file 'write_file.txt'");
	fs.writeFileSync('write_file.txt', text);
	console.log("written to file 'write_file.txt'");

};

write_file_sync();