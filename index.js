const { program } = require('commander');
const { Fcss } = require('./lib/fcss.js');


program.version('0.0.1');

program
	.option('-f, --file <type>', 'type css file path');

program.parse(process.argv);

let fcss = new Fcss(program.file);


