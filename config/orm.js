
var connection = require("./connection.js");

console.log("test connection");
connection.query('SELECT 1 + 1 AS solution;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

var orm = {
	"selectAll": function(cb) {
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

	// insertOne() {

	// },

	// updateOne() {

	// }
}




module.exports = orm;
