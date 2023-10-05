import mongoose from "mongoose";

const starshipSchema = new mongoose.Schema(
  {
    name: String, // nombre de la nave
    model: String, // modelo
    starship_class: String, // clase
    length: String, // tamaño
    passengers: String, // numero de pasajeros
    max_atmosphering_speed: String, // maxima velocidad
    hyperdrive_rating: String, // hiperimpulsor
    MGLT: String, // MGLT
    cargo_capacity: String, //Capacidad de carga
    consumables: String, //tiempo maximo de combustible
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Starship", starshipSchema);
