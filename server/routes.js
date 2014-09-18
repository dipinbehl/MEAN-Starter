/*
	Author - Dipin Behl
	Comments - Defines the server side API routes in the application.
*/

var authenticationController = require('./controllers/authorizationController.js');

module.exports = function(router){

router.post('/login', function(req, res){ authenticationController.login(req, res); })
router.get('/route', function(req, res){ res.send('route called'); })

}