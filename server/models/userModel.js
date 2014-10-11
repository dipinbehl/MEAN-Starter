/*
	Author - Dipin Behl
	Date - 9 July 2014
	Comments - Defines the data model for User Entity
*/

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var enums = require('./ModelEnums.js');
var SALT_WORK_FACTOR = 10;

var userSchema = mongoose.Schema({
		Title: String,
		FirstName: String,
		LastName: String,
		EmailAddress: String,
		Password: { type: String, select: false },
		Roles: { type: String, enum : enums.UserRoles },
		ProfileImageExtension: String,
		LastLogin: Date,
		IsActive: Boolean,
		CreateDate: Date,
		CreatedBy: mongoose.Schema.ObjectId
});

userSchema.pre('save', function(next){
	var user = this;
	if(!user.isModified('Password')) return next();
	
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if(err) return next(err);
		
		bcrypt.hash(user.Password, salt, function(err, hash){
			if(err) return next(err);
			
			user.Password = hash;
			next();
		});
	});
});

userSchema.statics.authenticate = function(loginCredentials, callBack){
	this.findOne({ EmailAddress: loginCredentials.LoginID }, 'Password', function(err, userInfo){
		if(!userInfo) return callBack(null, null);
		
		bcrypt.compare(loginCredentials.Password, userInfo.Password, function(err, isMatch){
			if(err) return callBack(err);
			
			if(isMatch) callBack(null, userInfo);
			else callBack(null, null);
				
		});
	});
}
userSchema.methods.changeStatus = function(isActive, callBack){
	this.findByIdAndUpdate( this._id, { isActive: isActive} , function(err){
		if(err) return callBack(err);
		
		callBack(null);
	});
}


exports.User = mongoose.model('User', userSchema);