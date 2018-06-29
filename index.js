var express=require('express');
var app=express();
var path=require('path');
var sequelize=require('Sequelize');
var bodyParser = require('body-parser');

'use strict';
//Views
app.use(express.static(__dirname + '/public/views'));

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Connecting to databse
var dbConnection = require('./api/dbConnection')
var dbConfig = require('./api/dbconfig.json')['dev'];
console.log(dbConfig.database)
var Connect=dbConnection(dbConfig.database,dbConfig.user,dbConfig.password,dbConfig.driver,dbConfig.host);
//end connection to database 

app.use(express.static('public'))
var path=app.use(express.static('public'))

//Models
//var Users=require('./api/models/UserModel/UserModel') (sequelize, Connect);




//Routes
var index=require('./api/routes/Index/Main');
var UserRoutes=require('./api/routes/UserRoutes/UserRoutes');
app.get('/',index);
app.post('/addUser',UserRoutes.addUser);



app.listen(8080,function(){
    console.log('Success')
})
