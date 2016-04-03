var mongoose = require('mongoose');
var Users = require('../models/userdata-coll')

var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
	  	Parcel_ID: {
	  		type: Number,
	  		required: true
	  	},
		OWNER: String,
		Prediction: Number
}, {timestamps: true});


var Users = mongoose.model('Users', userSchema);
module.exports = Users;