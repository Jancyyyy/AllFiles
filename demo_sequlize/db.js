const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('database', 'abhijeet', '12345', {
    dialect: 'sqlite',
  	// we will be saving our db as a file on this path
    storage: './database/database.sqlite'
});
(async function(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}())
module.exports = { 
    sequelize ,
    DataTypes,
    Model
}
