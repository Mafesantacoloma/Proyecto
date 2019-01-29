const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const { DATABASE, DB_USER, DB_PASSWORD } = process.env;
const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
