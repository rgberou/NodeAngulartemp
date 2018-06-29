const Sequelize=require('Sequelize');

module.exports=function(database,user,password,driver,host){
   //dbConfig.database,dbconfig.user,dbConfig.password,dbConfig.driver,dbConfig.host,dbConfig.driver 
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

      const db={};

      db.Users=require('./models/UserModel/UserModel')(sequelize, Sequelize);
      
      
}