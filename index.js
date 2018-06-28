var express=require('express');
var app=express();

var path=app.use(express.static('public'))

console.log(path);
app.get('/',function(req,res){
    res.send('test')
})

app.post('/',function(req,res){
    res.send('Hello world')
})

//run server
app.listen(8080,function(){
    console.log("Listening at")
});