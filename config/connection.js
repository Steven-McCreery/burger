
var mysql = require("mysql");

var connection = mysql.connection({
	port: 3000,
	host: "localhost",
	user: "root",
	password: "!@SQLm3.123",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.log("Error Occured While Connecting: ", err.stack);
		return;
	}
	console.log("Connected as ID: ", connection.threadId);
});

module.exports = connection;
