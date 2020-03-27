const { program } = require('commander');
const { Fcss } = require('./lib/fcss.js');

var path = require('path');
var appDir = path.dirname(require.main.filename);


program.version('0.0.1');

program
	.option('-f, --file <type>', 'type css file path');

program.parse(process.argv);

new Fcss(program.file).generate();


