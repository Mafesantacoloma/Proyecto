const sequelize = require('sequelize');
const database = require('../config/database');
const Alumno = require("../models/Alumno.js");


const controller = {};

controller.mensaje =  function(){
    console.log("funciona");
}

//MOSTRAR DE LA BASE DE DATOS
controller.getAlumno = async function (callback){

     try{
         console.log("DESDE EL CONTROLADOR")
            let response = await Alumno.findAll({
                attributes: ['carnet' , 'nombre','apellido', 'telefono' , 'email' , 'activo']
            

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


//ELIMINAR ALUMNO 
controller.deleteAlumno = async function (carnet, callback) {
    try {
        let response = await Alumno.update( {
            activo : false
        },{
            where: {
                 carnet 
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}


// UPDATE ALUMNO 
controller.UpdateAlumno = async function (data, carnet, callback) {
    try {
            let response = await Users.update({
             nombre: data.nombre,
             apellido: data.apellido,
             numCarrera: data.numCarrera,
             telefono: data.telefono,
             email: data.email,

        },{
            where: {
                carnet
            }
        });

        callback(null);
    } catch (error) {
        callback(error);
    }
}

 

module.exports = controller;