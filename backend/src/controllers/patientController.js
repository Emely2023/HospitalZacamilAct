//Array de metodos (C R U D)
const patientController = {};
import patientModel from "../models/Patient.js";

//SELECT
patientController.getPatients = async (req, res) => {
  const patients = await patientModel.find();
  res.json(patients);
};

//INSERT
patientController.createPatient = async (req, res) => {
  const { name, age, email, password, phone, isVerified } = req.body;
  const newPatient = new patientModel({ name, age, email, password, phone, isVerified });
  await newPatient.save();
  res.json({ message: "Patient created" });
};

//DELETE
patientController.deletePatient = async (req, res) => {
  const deletedpatient = await patientModel.findByIdAndDelete(req.params.id);
  if (!deletedpatient) {
  return res.status(404).json({ message: "Patient dont find" });
   }
  res.json({ message: "Patient deleted" });
};

//UPDATE
patientController.updatePatient = async (req, res) => {
// Solicito todos los valores  
const { name, age, email, password, phone, isVerified } = req.body;
// Actualizó  
await patientModel.findByIdAndUpdate(
    req.params.id,
     { 
        name,
        age, 
        email, 
        password, 
        phone, 
        isVerified 
    }, 
    { new: true }
);
 // mmuestro un mensaje que todo se actualizó
  res.json({ message: "Patient updated" });
};

export default patientController;
