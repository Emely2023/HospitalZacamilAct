import appointmentModel from "../models/Appointment.js";

const appointmentController = {};

// SELECT
appointmentController.getAppointments = async (req, res) => {
  const appointments = await appointmentModel.find().populate("doctor").populate("patient");
  res.json(appointments);
};

// INSERT
appointmentController.createAppointment = async (req, res) => {
  const { date, time, reason, doctor, patient } = req.body;
  const newAppointment = new appointmentModel({ date, time, reason, doctor, patient });
  await newAppointment.save();
  res.json({ message: "Appointment created" });
};

//DELETE
appointmentController.deleteAppointment = async (req, res) => {
  const deletedappointment = await appointmentModel.findByIdAndDelete(req.params.id);
  if (!deletedappointment) {
    return res.status(404).json({ message: "Appointment dont find" });
}
    res.json({ message: "Appointment deleted" });
};

// UPDATE
appointmentController.updateAppointment = async (req, res) => {
  // Solicito todos los valores
  const { date, time, reason, doctor, patient } = req.body;
  // Actualizó
  await appointmentModel.findByIdAndUpdate(
    req.params.id, 
    { 
        date, 
        time, 
        reason, 
        doctor, 
        patient 
    }, 
    { new: true });
    // Muestro un mensaje de que todo se actualizó
  res.json({ message: "Appointment updated" });
};

export default appointmentController;
