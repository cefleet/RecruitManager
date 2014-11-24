var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var crypto = require('crypto');
var fs = require('fs');

app.use(session({secret: 'Iamsgoing45ferfIfoyrt435fe4eDF34f'}));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/',express.static(__dirname+'/dev/public'));

//Remove for production
app.use('/node_modules',express.static(__dirname + "/node_modules"));

app.listen(2020);
