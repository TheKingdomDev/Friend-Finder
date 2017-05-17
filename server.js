// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Init Express App

var app = express();
var PORT = 8080;

//Data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var staticContentFolder = __dirname + "/public";
// set the static files location /public/img will be /img for users
app.use(express.static(staticContentFolder));
   



// ROUTER
require("./app/routing/apiRoutes.js")(app); 
require("./app/routing/htmlRoutes.js")(app);


// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log(__dirname);
});