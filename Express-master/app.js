var express = require ('express');
var app= express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
let cors=require('cors');
app.use(cors());

var db = "mongodb://localhost/newsApp";
mongoose.connect(db);


 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:true
}));

var read = require('./routes/read');
var save = require('./routes/save');
//var update = require('./routes/update');
var remove = require('./routes/remove');



app.use('/',read);
app.use('/',save);
//app.use('/',update);
app.use('/',remove);

var port = 3000
app.listen(port,()=>{
	console.log(port);
})

module.exports= app;
