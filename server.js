
// requiring express, bodyParser, and setting up the app object and port (useable with heroku)
var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

// static express folder lookup
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:false}));

// requiring and setting up handlebars to render pages
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// requiring and using routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


// setting up the app to listen to the PORT
app.listen(PORT, function() {
	console.log("Listening on Port: ", PORT);
})
