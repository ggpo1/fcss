const fs = require('fs');

let fcssPath = '';
let appPath = '';

exports.Fcss = class Fcss {

	get fcssPath() { return fcssPath; }
	get fcssFullPath() { return `${appPath}\\${fcssPath}` }

	constructor(_fcssPath) {
		appPath = require('path').dirname(require.main.filename);
		fcssPath = _fcssPath;
	}

	// method for getting file
	get fileData() {
		try {
			return fs.readFileSync(this.fcssFullPath, 'utf8');
		} catch {
			console.error('File not found!');
		}
	}

	saveFile() {

	}

	// method for parsing fcss files
	parse() {
		let fcssFile = this.fileData;
		if (fcssFile !== undefined) {
			fcssFile = fcssFile.split(',').map(el => el.split('\n'));
			fcssFile.forEach(el => el.map(mapEl => {
				let ell = mapEl.replace('\r', '');
				console.log(ell);
				return ell;
			}));
		}
	}

	// method for generating css files from fcss files
	generate() {
		let parsedCSS = this.parse();
		this.saveFile();
	}

};