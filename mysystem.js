var os = require('os');

var message = 'Here is some info of your system';

var sysarray = new Array('Type: ' + os.type(),
						 'Node Version: ' + process.version,
						 'Platform: ' + os.platform(),
						 'Hostname: ' + os.hostname(),
						 'Total memory: ' + os.totalmem(),
						 'Free memory: ' + os.freemem(),
						 'Uptime: ' + os.uptime()
						);
console.log(message);

for (i in sysarray){
	console.log(sysarray[i]);
}
