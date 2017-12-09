
// requiring the orm file and its methods
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		console.log("burger");
		orm.selectAll(function(res) {
			console.log(res)
			cb(res);
		});
	},

	insertOne: function(values, cb) {
		orm.insertOne(values, function(res) {
			cb(res);
		})
	},

	updateOne: function(devoured, id, cb) {
		orm.updateOne(devoured, id, function(res) {
			cb(res);
		})
	}

}


// exporting the burger object and its methods
module.exports = burger;
