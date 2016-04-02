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
	Users.create(req.body, function(err, user) {
		if (err) throw err;
		console.log("User added");
		var id = user._id;
		res.writeHead(200, {
			'Content-Type' : 'text/plain'
		});
		res.end("Added user with user id: " + id);
	})
})
.delete(function(req, res, next) {
	Users.remove({}, function(err, resp) {
		if (err) throw err;
		res.json(resp);
	});
})

module.exports = router;
