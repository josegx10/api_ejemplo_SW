import mongoose from "mongoose";

const specieSchema = new mongoose.Schema(
  {
    name: String, // nombre
    classification: String, // clasificacion
    designation: String, // designacion
    average_height: String, // estatura
    average_lifespan: String, // promedio de vida
    eye_colors: String, // color de ojos
    hair_colors: String, // color de cabello
    skin_colors: String, // color de piel
    language: String, // lenguaje
    homeworld: String, //planeta
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Specie", specieSchema);
