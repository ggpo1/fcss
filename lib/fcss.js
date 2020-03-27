const fs = require('fs');

let path = '';

exports.Fcss = class Fcss {

	get path() { return path; }

	constructor(_path) {
		path = _path
	}

	// method for parsing fcss files
	parse() {

	}

	// method for generating css files from fcss files
	generate() {

	}

};