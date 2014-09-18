/*
	Author - Dipin Behl
	Date - 9 July 2014
	Comments - Defines the data model for Agency Entity
*/

var mongoose = require('mongoose');

exports.Agency = mongoose.model('Agency', mongoose.Schema({
		Title : String,
		Address: String,
		Website: String,
		ContactEmail: String,
		ContactNumber: String,
		IncorporatedOn: Date,
		ProfileImageExtension: String,
		IsActive: Boolean,
		CreateDate: Date,
		CreatedBy: mongoose.Schema.ObjectId
	})
);