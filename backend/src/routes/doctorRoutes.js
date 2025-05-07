import express from "express";
import doctorController from "../controllers/doctorController.js";
//Router que nos ayuda a color métodos
// que tendrá mi ruta


//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();


router
.route("/")
.get(doctorController.getDoctors)
.post(doctorController.createDoctor)

router
.route("/:id")
.put(doctorController.updateDoctor)
.delete(doctorController.deleteDoctor);

export default router;