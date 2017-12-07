
var orm = require("../config/orm.js");

var burger = {
	"selectAll": function(cb) {
		console.log("burger");
		orm.selectAll(function(res) {
			console.log(res)
			cb(res);
		});
	},

	// insertOne(cb) {
	// 	orm.insertOne("burgers", function)
	// },

}








module.exports = burger;
