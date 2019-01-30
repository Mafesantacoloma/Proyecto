const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const md5 = require("md5");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/database");

const Alumno = sequelize.define("alumnos", {
  carnet: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
    
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false
  },

  telefono: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  activo: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 1 ,

    validate: {
      notEmpty: true
    } 
  
},

  timestamps: false,
  freezeTableName: true

});

module.exports = Alumno;
