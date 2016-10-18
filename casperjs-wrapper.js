var path = require('path');
var spawn = require('child_process').spawn;
var command = 'node_modules/phantomcss/node_modules/casperjs/bin/casperjs';
var args = [
	'test',
	'--ignore-ssl-errors=true',
	// Overwrite sslv3 default which fastly blocks because of POODLE vulnerability
	'--ssl-protocol=tlsv1',
	'runner.js'
];
var opts = {
	stdio: 'inherit',
	env: {
		PHANTOMJS_EXECUTABLE: require('phantomcss/node_modules/phantomjs-prebuilt').path,
		HOST: 'https://www.hptn.org'
	}
};

spawn(command, args, opts).on('exit', function (code) {
	console.info('CasperJS exited with code ' + code);
	process.exit(code);
});
