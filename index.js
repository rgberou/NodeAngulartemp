var express=require('express');
var app=express();
var path=require('path');
var bodyParser = require('body-parser');

'use strict';
//Views
app.use(express.static(__dirname + '/public/views'));

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



//Connecting to databse
//var config = require('dbconfig.json');
//console.log(config)
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}).authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

//end connection to atabes





app.use(express.static('public'))

var path=app.use(express.static('public'))

//
app.get('/',function(req,res){
    res.sendFile('index.html');
});

app.post('/addUser',function(req,res){
    console.log('Submitted')
    res.send(req.body)
    //console.log(req.body)
})

app.listen(8080,function(){
    console.log('Success')
})
