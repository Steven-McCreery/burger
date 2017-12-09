
var connection = require("./connection.js");

console.log("test connection");
connection.query('SELECT 1 + 1 AS solution;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

var orm = {
	selectAll: function(cb) {
		console.log('ORM');
		console.log(connection);
		connection.query("SELECT * FROM burgers;", function(err, result) {
			if (err) {
				console.log(err);
				throw err;
			}
			console.log(result);
			cb(result);
		})
	},

	insertOne: function(values, cb) {
		connection.query("INSERT INTO burgers", values, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		})
	},

	updateOne: function(devoured, id, cb) {
		connection.query("UPDATE burgers SET " + devoured + "WHERE id = " + id, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		})
	}
}




module.exports = orm;
