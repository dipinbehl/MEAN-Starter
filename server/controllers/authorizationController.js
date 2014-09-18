/*
	Author - Dipin Behl
	Comments - Defines the data logics for Authorization.
*/
var mongoose = require('mongoose');

var user = mongoose.model('User');
var tokenModel = mongoose.model('Token');

exports.login = function(req, res){
	user.authenticate({LoginID : req.body.loginName, Password: req.body.password}, function(err, userInfo){
		if(err) return err;
		
		if(userInfo){
			var token = new tokenModel();
			token.generateToken(userInfo, '', function(err, token){
				if(err) return res.send(500, err);
		
				res.send(200, {id: userInfo._id, token: token._id});
			});
		}
		else
			res.send(200, 'Username or Password is not correct');
	});

}
