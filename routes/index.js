const express = require("express");
const router = express.Router();
const AlumnoControlador = require("../controllers/AlumnoControlador");



router.get("/", (req, res) => {
  console.log("SUPER FUNCIONA")
  AlumnoControlador.getAlumno((alumno, err) => {
    if (err)
      res.json({
        success: false,
        msg: 'Failed to show Users'
      });
    else
    console.log(alumno);
      res.render("error",{alumno});
      console.log(alumno);
  });
});

router.post("/deleteAlumno/:carnet" , (req, res) => {
      if(!!req.params.carnet){
          AlumnoControlador.deleteAlumno(req.params.carnet , (err) => {
            if (err)
              res.json({ 
                success: false,
                msg:'no se pudo eliminar el alumno'
              });
              else
              res.redirect('/');
          });
      }
});




module.exports = router;
