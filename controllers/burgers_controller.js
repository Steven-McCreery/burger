
// requiring the express app 
var express = require("express");

var router = express.Router();

// requiring the burger.js file for its methods
var burger = require("../models/burger.js");

// setting up get, post, and put routes
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		console.log(data);
		res.render("index", {burgers: data});
	});
})

router.post("/api/burgers", function(req, res) {
	burger.insertOne(req.body.burger_name, function(result) {
		res.json({id: result.insertId});
	});
})

router.put("/api/burgers/:id", function(req, res) {
	burger.updateOne({devoured: req.body.devoured}, req.params.id, function(result) {
		if (res.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
})


// exporting the routes
module.exports = router;
