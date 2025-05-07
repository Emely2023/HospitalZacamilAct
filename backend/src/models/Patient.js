/*
nombre
edad
correo
contraseña
 teléfono 
 isVerified
 */

import { Schema, model } from "mongoose";

const PatientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  isVerified: {
    type: Boolean,
    require: true
  },
},
{
  timestamps: true,
  strict: false
}
);

export default model("Patient", PatientSchema);
