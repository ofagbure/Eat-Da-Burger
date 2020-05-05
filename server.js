require('dotenv').config()
var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
const port = process.env.PORT || 3000
app.use(express.static("public"));
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});

console.log("connection established!");