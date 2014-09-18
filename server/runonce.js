/*
	Author - Dipin Behl
	Comments - Defines procedures for setting up the system.
*/

var express = require('express');
var mongoose = require('mongoose');

var user = mongoose.model('User');

module.exports = function(app){
	if(process.env.RUNONCE == 'runonce'){
		var router = express.Router();
		app.use('/runonce', router);
		
		router.get('/', function(req, res){
			res.set('Content-Type', 'text/html');
			res.send(200, 'Runonce settings have been loaded and running!!');
		});
		
		router.post('/createAdmin', function(req, res){
			var admin = new user({
				Title: null,
				FirstName: 'Parlasa',
				LastName: 'Administrator',
				EmailAddress: req.body.loginName,
				Password: req.body.password,
				Agency: null,
				Roles: 'Admin',
				ProfileImageExtension: null,
				LastLogin: null,
				IsActive: true,
				CreateDate: new Date(),
				CreatedBy: null
			})
			.save(function(err){
				if(err) {console.log(err); res.set('Content-Type', 'text/plain'); return res.send(500, err);}
				
				res.set('Content-Type', 'text/html');
				res.send('<i>Yay!!</i> Administrator account been set up <br/> Kindly <b>restart</b> the Node.JS server without <i>RUNONCE</i> settings to get going');
			});
		});
	}
}