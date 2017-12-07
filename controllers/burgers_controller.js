
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/home", function(req, res) {
	burger.selectAll(function(data) {
		console.log(data);
		res.render("index", {burgers: data});
	});
})







module.exports = router;
