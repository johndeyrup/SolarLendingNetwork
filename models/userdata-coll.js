var mongoose = require('mongoose');
var Users = require('../models/userdata-coll')

var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
	  	PARCEL_ID: {
	  		type: Number,
	  		required: true
	  	},
		CM_ID: String,
		ST_NUM: String,
		ST_NAME: String,
		ST_NAME_SUF: String,
		UNIT_NUM: String,
		ZIPCODE: Number,
		FULL_ADDRESS: String,
		PTYPE: String,
		LU: String,
		OWN_OCC: String,
		OWNER: String,
		OWNER_MAIL_ADDRESS: String,
		OWNER_MAIL_CS: String,
		OWNER_MAIL_ZIPCODE: Number,
		AV_LAND: String,
		AV_BLDG: String,
		AV_TOTAL: String,
		GROSS_TAX: Number,
		LAND_SF: String,
		YR_BUILT: String,
		YR_REMOD: String,
		GROSS_AREA: String,
		LIVING_AREA: String,
		NUM_FLOORS: Number,
		STRUCTURE_CLASS: String,
		R_BLDG_STYL: String,
		R_ROOF_TYP: String,
		R_EXT_FIN: String,
		R_TOTAL_RMS: String,
		R_BDRMS: String,
		R_FULL_BTH: String,
		R_HALF_BTH: String,
		R_KITCH: String,
		R_HEAT_TYP: String,
		R_AC: String,
		R_FPLACE: String,
		S_NUM_BLDG: String,
		S_BLDG_STYL: String,
		S_UNIT_RES: String,
		S_UNIT_COM: String,
		S_UNIT_RC: String,
		S_EXT_FIN: String,
		U_BASE_FLOOR: String,
		U_CORNER: String,
		U_ORIENT: String,
		U_TOT_RMS: String,
		U_BDRMS: String,
		U_FULL_BTH: String,
		U_HALF_BTH: String,
		U_KIT_TYPE: String,
		U_HEAT_TYP: String,
		U_AC: String,
		U_FPLACE: String,
		LOCATION: String
}, {timestamps: true});


var Users = mongoose.model('Users', userSchema);
module.exports = Users;