
var express = require("express");

var bodyParser = require("bodyParser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("./public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


require("./controllers/burgers_controller");

app.use("/", routes);









app.listen(PORT, function() {
	console.log("Listening on Port: ", PORT);
})
