function read_formatted_file () {
	// body...
	var fs = require('fs');

	var buffer = fs.readFileSync('read_formatted_file.txt');

	var file_contents = buffer.toString();

	var names = [];
	var surnames = [];
	var cell = [];
	var emails = [];


	var broken_promises = file_contents.split('\n');
	var formatted_array = [];

	for(var j = 0; j < broken_promises.length; j++){
		formatted_array[j] = broken_promises[j].split('#');
	};


	for(var j = 0; j < formatted_array.length; j++){
		for (var i = 0; i < formatted_array[j].length; i++) {

			if(j !== 0){

				if(i === 0){
					names.push(formatted_array[j][i]);
				};
				if (i === 1) {
					surnames.push(formatted_array[j][i]);
				};
				if (i === 2) {
					cell.push(formatted_array[j][i]);
				};
				if(i === 3){
					emails.push(formatted_array[j][i]);
				};
			};
		};
	};

	console.log(formatted_array[0][0] + "\t\t" + formatted_array[0][1] + "\t\t" + formatted_array[0][2] + "\t\t"+ formatted_array[0][3]);

	for (var i = 0; i < 4; i++) {
		console.log(names[i] + "\t" + surnames[i] + "\t" + cell[i] + "\t" + emails[i]+ "\n");
	};
};

read_formatted_file();