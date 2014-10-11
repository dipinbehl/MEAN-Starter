/*
	Author - Dipin Behl
	Date - 8 July 2014
	Comment - Returns the database connection instance for the current environment
*/
var mongoose = require('mongoose');

module.exports = function(){

	var db = new Object();

	if(process.env.NODE_ENV == 'development'){
		db = mongoose.connect('mongodb://127.0.0.1/means-dev');
	}
	else if(process.env.NODE_ENV == 'production'){
		db = mongoose.connect('mongodb://127.0.0.1/mean-starter');
	}
	return db;
}
