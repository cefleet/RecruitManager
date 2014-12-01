var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

app.use('/',express.static(__dirname+'/dev/public'));

//Remove for production
app.use('/node_modules',express.static(__dirname + "/node_modules"));
app.listen(2020);
