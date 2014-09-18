/*
	Author - Dipin Behl
	Comments - Defines the data model for token based authentication
*/

var mongoose = require('mongoose');
var nuuid = require('node-uuid');
var moment = require('moment');
var enums = require('./ModelEnums.js');

var DEFAULT_TOKEN_TIMEOUT_MINUTES = 30;

var tokenSchema = mongoose.Schema({
		_id: String,
		CreationTime: Date,
		ValidTill: Date,
		LoginUserName: String,
		LoginUserID: { type: mongoose.Schema.ObjectId, ref: 'User' },
		Role: { type: String, enum : enums.UserRoles },
		IPAddress: String
},
{
	autoindex: false,
	_id: false
});

tokenSchema.methods.generateToken = function(userInfo, ipAddress, callBack){
	this._id = nuuid.v4();
	this.CreationTime = new Date()
	this.ValidTill = moment().add('m', DEFAULT_TOKEN_TIMEOUT_MINUTES);
	this.LoginUserName = userInfo.LoginName;
	this.LoginUserID = userInfo.LoginID;
	this.Role = userInfo.Role;
	this.IPAddress = ipAddress;

	this.save(function(err, token){
		if(err) { console.log(err); return callBack(err);}
		
		callBack(null, token);
	});
}
tokenSchema.statics.verifyToken = function(token, callBack){
	this.findOne( {Token: token}, function(err, tokenInfo){
		if(err) return callBack(err);
		
		callBack(null, (tokenInfo.ValidTill > new Date()));
	});
}


exports.Token = mongoose.model('Token', tokenSchema);