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

var path=app.use(express.static('public'))

console.log(path);
app.get('/',function(req,res){
<<<<<<< HEAD
    res.send('test')
})

app.post('/',function(req,res){
    res.send('Hello world')
})

//run server
app.listen(8080,function(){
    console.log("Listening at")
});
=======
    res.sendFile('index.html');
});

app.post('/addUser',function(req,res){
    console.log('Submitted')
    res.send(req.body)
    console.log(req.body)
})

app.listen(8080,function(){
    console.log('Success')
})
>>>>>>> 1f58bf1a445cbfa7a7c378b8cba1a2f3d6287b0a
