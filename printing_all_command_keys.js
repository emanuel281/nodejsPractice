function printer () {
	// body...
	for (var key in process) {
		console.log("process." + key + " = " + process.key);
	};
};

printer();	