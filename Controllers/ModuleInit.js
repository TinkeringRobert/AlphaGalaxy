// Local requires
var winston = require('winston');
var serial = require('./SerialController');

module.exports = {
	initialize: function(params)
	{
		winston.debug('Starting : ModuleInit');
	  serial.initialize(params);
	}
}
