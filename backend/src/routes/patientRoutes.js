import express from "express";
import patientController from "../controllers/patientController.js";

// Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

router
  .route("/")
  .get(patientController.getPatients)
  .post(patientController.createPatient);

router
  .route("/:id")
  .put(patientController.updatePatient)
  .delete(patientController.deletePatient);

export default router;
