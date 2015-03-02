module.exports = function (dir, ext, callback){
		// body...
		var fs = require('fs');
		var filtered = [];

		fs.readdir(dir, function (err, list) {
			// body...
			if(err){
				callback(err, null);
				return; 
			}

			var extension = "." + ext;

			for(var i = 0; i < list.length; i++){
				
				if( (list[i].substr(list[i].length-(extension.length), list[i].length-1)) === extension){
					filtered.push(list[i]);
				}
				
			}

			callback(null, filtered);

		});
	}