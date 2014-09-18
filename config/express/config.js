/*
	Author - Dipin Behl
	Date - 8 July 2014
	Comment - Sets the generic configuration for Express.JS app
*/
//Requiring packages
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');
var path = require('path');

module.exports = function(app){
	
	//Generic settings for ExpressJS
	app.use(express.static(path.resolve(__dirname, '../../client')));
	app.use(bodyParser.urlencoded({ extended:true }));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	//Environment specific settings for ExpressJS
	if(process.env.NODE_ENV == 'development')
		require('./dev.js')(app);
	else if(process.env.NODE_ENV == 'production')
		require('./prod.js')(app);
		
	//Creating the custom router for the app
	var router = express.Router();
	app.use('/api', router);
	return router
}