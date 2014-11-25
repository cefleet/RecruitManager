var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var crypto = require('crypto');
var fs = require('fs');

//MongoDB stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recuit');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  console.log('I have connected');
});


var Schema = mongoose.Schema;


//Mongoose stuff. Really needs to be in a different file
var recuitSchema = mongoose.Schema({
  id : String,
  first_name:  String,
  last_name: String,
  email:   String,
  added: { type: Date, default: Date.now },
  phone_1 : String,
  phone_2 : String,
  address_street : String,
  address_city : String,
  address_state : String,
  address_Zip : String,
  job_type : String,
  years_exp : String
});

var Recuit = mongoose.model('Recuit', recuitSchema);

app.use(session({secret: 'Iamsgoing45ferfIfoyrt435fe4eDF34f'}));

app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/save_recuit', function(req,res){
  console.log(req.body);
  var person = new Recuit(req.body);
  person.save(function (err, person) {
    if (err) return console.error(err);
  });

  Recuit.find(function (err, people) {
    if (err) return console.error(err);
    console.log(people)
  })
});



app.use('/',express.static(__dirname+'/dev/public'));

//Remove for production
app.use('/node_modules',express.static(__dirname + "/node_modules"));

app.listen(2020);
