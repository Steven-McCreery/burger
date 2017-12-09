
// requiring mysql and setting up the connection to the needed database
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		port: 3000,
		host: "localhost",
		user: "root",
		password: "!@SQLm3.123",
		database: "burgers_db"
	});
}


// connecting to the database
connection.connect(function(err) {
	if (err) {
		console.log("Error Occured While Connecting: " + err.stack);
		return;
	}
	console.log("Connected as ID: " + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

console.log("Test");


// exporting the connection for use by app
module.exports = connection;
