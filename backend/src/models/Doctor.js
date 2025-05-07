/*
nombre
especialidad
correo
contraseña
 */

import { Schema } from "mongoose";
import { model } from "mongoose";

const DoctorSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    specialty: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
      }
 }, 
    {
      timestamps: true,
      strict: false 
    }
);
    
    export default model('Doctor', DoctorSchema);
