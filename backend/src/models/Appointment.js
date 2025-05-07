/*campos: 
fecha
hora
motivo
doctor asignado
paciente asignado
 */
import { Schema, model } from "mongoose";

const AppointmentSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
    required: true
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
},
{
  timestamps: true,
  strict: false 
}
);

export default model("Appointment", AppointmentSchema);
