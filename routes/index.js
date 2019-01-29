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
      res.render("error",{alumno});
      console.log(alumno);
  });
});
router.post("/create")
module.exports = router;
