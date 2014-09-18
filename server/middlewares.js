/*
	Author - Dipin Behl
	Date - 10 July 2014
	Comments - Loads custom middlewares for the application.
*/

module.exports = function(app){
	
	//Loading custom middleware to check the tokens with each request
	var checkToken = require('./middlewares/checkToken.js');
	app.use(checkToken);
}