const sequelize = require('sequelize');
const database = require('../config/database');
const Alumno = require("../models/Alumno.js");


const controller = {};

controller.mensaje =  function(){
    console.log("funciona");
}

controller.getAlumno = async function (callback){

     try{
         console.log("DESDE EL CONTROLADOR")
            let response = await Alumno.findAll({
                attributes: ['carnet' , 'nombre','apellido', 'telefono' , 'email']
            });
            let alumno = response.map(result => result.dataValues);
            console.log(alumno);
            
            callback(alumno, null);
            console.log(alumno);
     } catch(error){

        console.log("holaaaa");
        callback(null, error);
     }


}
 

module.exports = controller;