var express=require('express');
var app=express();
var path=require('path');
var bodyParser = require('body-parser')
//Views
app.use(express.static(__dirname + '/public/views'));
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile('index.html');
});

/*app.post('/addUser',function(req,res){
    console.log('Submitted')
    res.send(req.body)
    console.log(req.body)
})*/

app.post('/addUser', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body.fname)
  })

app.listen(8080,function(){
    console.log('Success')
})