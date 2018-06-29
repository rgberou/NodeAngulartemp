//Models
var sequelize=require('Sequelize');
exports.module.UserModel=function(sequelize,Sequelize){
    var user=sequelize.define('User',{
        userID:{
            type:Sequelize.int,
            allowNull:false,
            primaryKey:true
        },
        userName:{
            type:Sequelize.String,
            allowNull:false
        },
        userFname:{
            type:Sequelize.String,
            allowNull:false
        },
        userLname:{
            type:Sequelize.String,
            allowNull:false
        },
        password:{
            type:Sequelize.String,
            allowNull:false
        }
    });

    return user;
}