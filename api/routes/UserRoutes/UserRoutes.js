
const Sequelize=require('Sequelize');

//var UserModel=require('../models/UserModel/UserModel')
module.exports.addUser=function(req,res){
    console.log('Submitted')
    res.send(req.body)
    //console.log(req.body)
}
