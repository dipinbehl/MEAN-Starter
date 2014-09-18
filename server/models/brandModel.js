/*
	Author - Dipin Behl
	Date - 10 July 2014
	Comments - Defines the data model for Brand Entity
*/

var mongoose = require('mongoose');

exports.Brand = mongoose.model('Brand', mongoose.Schema({
	Title: String,
	Website: String,
	LogoImageExtension: String,
	ParentCompany: String,
	Notes: String
})
);