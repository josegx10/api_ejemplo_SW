import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema(
  {
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: String,
    films: Array,
    species: Array,
    vehicles: Array,
    starships: Array,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("People", peopleSchema);
