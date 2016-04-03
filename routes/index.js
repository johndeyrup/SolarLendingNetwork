var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/userdata-coll');

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  Users.find({}, function(err, users) {
  	console.log("test");
  	if(err) throw err;
  	res.json(users);
  });
})
.post(function(req, res, next) {
	if (req.body.batch) {
		Users.create(req.body.batch, function(err) {
			if(err)
				res.send(err);
			else
				res.json(req.body);
		});
	}

	else {
		Users.create(req.body, function(err, user) {
			if (err) throw err;
			console.log("User added");
			res.json(req.body);
		});

	}

})
.delete(function(req, res, next) {
	Users.remove({}, function(err, resp) {
		if (err) throw err;
		res.json(resp);
	});
})

module.exports = router;
