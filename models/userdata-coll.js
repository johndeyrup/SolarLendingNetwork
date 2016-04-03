var mongoose = require('mongoose');
var Users = require('../models/userdata-coll')

var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
	  	Parcel_ID: {
	  		type: Number,
	  		required: true
	  	},
		Name: String,
		Prediction: String
}, {timestamps: true});


var Users = mongoose.model('Users', userSchema);
module.exports = Users;