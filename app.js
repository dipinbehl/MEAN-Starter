/*
	Author - Dipin Behl
	Comments - Creates the server for the application and loads settings for the app.
*/

//Setting default environment for NodeJS process
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Create and configure the instance for ExpressJS app
var app = require('express')();
var router = require('./config/express/config.js')(app); //This call returns the custom router to add api routes

//Getting instance for database
var db = require('./config/database.js')();

//Loading Mongoose models
require('./server/models.js')();

//Loading custom middlewares
require('./server/middlewares.js')(app);

//Loading Runonce settings ***Runs only when 'RUNONCE=runonce' is supplied while running the Node.JS server
require('./server/runonce.js')(app);

//Loading API routes
require('./server/routes.js')(router);

//Serving Index.html
app.get('/', function(req, res){
	res.setHeader('content-type', 'text/html');
	res.sendfile('./client/index.html');
});

//running the app
app.listen(process.env.PORT, function(){
	console.log('\napplication now running on port number \'' + process.env.PORT + '\' under \'' + process.env.NODE_ENV + '\' environment\n');
});