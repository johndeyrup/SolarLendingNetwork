var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/userdata-coll');


/* GET users listing. */
router.route('/')
.post(function(req, res, next) {
	console.log(req.data);
  Users.find({"OWNER": { $in: req.body } } , function(err, owners) {
  	if(err) throw err;
  	res.json(owners);
  });
});

module.exports = router;
