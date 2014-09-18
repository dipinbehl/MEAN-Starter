/*
	Author - Dipin Behl
	Date - 11 July 2014
	Comments - Defines the data model for Publication Entity
*/

var mongoose = require('mongoose');
var enums = require('./ModelEnums.js');

exports.Publication = mongoose.model('Publication', mongoose.Schema({
	Title: String,
	Type: { type: String, enum: enums.PublicationType}
})
);